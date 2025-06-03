import type { Thunk } from '@neisanworks/types-react'
import React from 'react'
import { type Root, createRoot } from 'react-dom/client'
import type { PortalManagerProperties, PortalComponent } from './portals.types'
import { PortalContext } from './portals.context'
import { cn } from '@sglara/cn'
import type { AlertCache } from '../alerts/alerts.types'

export const PortalManager: React.FC<PortalManagerProperties> = ({ children, className, id = 'portal-root' }) => {
	const layer = React.useRef<HTMLDivElement>(null)
	const rendering = React.useRef(new Map<string, { root: Root; container: HTMLDivElement }>())
	const [alerts, setAlerts] = React.useState<AlertCache>([])

	React.useEffect(() => {
		let root = document.getElementById(id) as typeof layer.current
		if (!root) {
			root = document.createElement('div')
			root.id = id
			root.className = cn(
				'fixed top-0 left-0 pointer-events-none flex flex-col items-center justify-center w-screen h-screen',
				className
			)
			layer.current = root
			document.body.appendChild(root)
		}
	}, [])

	const open: Thunk<[PortalComponent<React.FC<any>>], { close: Thunk } | undefined> = (portal) => {
		const root = layer.current
		if (!root) return

		const existing = document.getElementById(portal.id)
		if (existing) {
			root.removeChild(existing)
		}

		const container = document.createElement('div')
		container.id = portal.id

		const component = createRoot(container)
		component.render(<portal.component {...(portal.props ?? {})} />)

		root.appendChild(container)

		rendering.current.set(portal.id, { root: component, container })

		const close = () => {
			const rendered = rendering.current.get(portal.id)
			if (!rendered) return

			component.unmount()
			if (layer.current?.contains(rendered.container)) layer.current?.removeChild(rendered.container)

			rendering.current.delete(portal.id)
		}

		return { close }
	}

	const close: Thunk<[string]> = (id) => {
		const portal = rendering.current.get(id)
		if (!portal) return

		portal.root.unmount()
		if (layer.current?.contains(portal.container)) layer.current?.removeChild(portal.container)

		rendering.current.delete(id)
	}

	const clear: Thunk = () => {
		rendering.current.forEach((_, id) => close(id))
	}

	return (
		<PortalContext.Provider value={{ open, close, clear, layer, alerts, setAlerts }}>
			{children}
		</PortalContext.Provider>
	)
}

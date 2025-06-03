import type { Thunk } from '@neisanworks/types-react'
import { usePortalManager } from '../portals/portals.context'
import type { PortalComponent } from '../portals/portals.types'
import type { ConfirmModalOptions, ModalOptions } from './modal.types'
import type React from 'react'
import { ModalWrapper } from './components/wrapper'
import { Button } from '../button'
import { Card } from '../card'

type useModalReturn = {
	open: Thunk<[PortalComponent<React.FC>, ModalOptions]>
	confirm: Thunk<[ConfirmModalOptions], Promise<boolean>>
	close: Thunk<[string]>
}
type useModalHook = Thunk<[], useModalReturn>

export const useModal: useModalHook = () => {
	const { open, close, layer } = usePortalManager()

	const overlay = {
		render: () => {
			const root = layer.current
			if (root) {
				root.style.pointerEvents = 'all'
				root.style.transition = 'background-color 200ms ease'
				root.style.backgroundColor = 'rgba(0, 0, 0, 0.75)'
			}
		},
		remove: () => {
			const root = layer.current
			if (root) {
				root.style.pointerEvents = 'none'
				root.style.backgroundColor = 'transparent'
				root.style.transition = ''
			}
		}
	}

	const closeModal: useModalReturn['close'] = (id) => {
		close(id)
		overlay.remove()
	}

	const openModal: useModalReturn['open'] = (portal, { title, desc, icon, className }) => {
		const Component: React.FC = () => (
			<ModalWrapper
				title={title}
				desc={desc}
				icon={icon}
				className={className}
				close={() => closeModal(portal.id)}
			>
				<portal.component {...portal.props} />
			</ModalWrapper>
		)

		const render: PortalComponent<typeof Component> = { id: portal.id, component: Component }

		overlay.render()
		return open(render)
	}

	const confirm: useModalReturn['confirm'] = ({ title, message, icon, className }) => {
		return new Promise<boolean>((resolve) => {
			const id = `confirm-${Date.now()}`

			const resolveModal: Thunk<[boolean]> = (result) => {
				closeModal(id)
				resolve(result)
			}

			const Component: React.FC = () => (
				<ModalWrapper title={title ?? 'Confirm'} icon={icon} className={className}>
					<p>{message}</p>
					<Card.Footer>
						<Button
							variant={'destructive'}
							className='w-full'
							onClick={() => resolveModal(false)}
							label='Cancel'
						/>
						<Button className='w-full' onClick={() => resolveModal(true)} label='Confirm' />
					</Card.Footer>
				</ModalWrapper>
			)

			const render: PortalComponent<typeof Component> = {
				id,
				component: Component
			}

			overlay.render()
			return open(render)
		})
	}

	return { open: openModal, confirm, close: closeModal }
}

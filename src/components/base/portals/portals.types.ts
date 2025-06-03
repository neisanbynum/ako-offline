import type { HTMLProperties, Thunk } from '@neisanworks/types-react'
import type { AlertCache } from '../alerts/alerts.types'


export type PortalComponent<TComponent extends React.FC<any>> = {
	id: string
	component: TComponent
	props?: React.ComponentProps<TComponent>
}

export type PortalManagerValues = {
	open: Thunk<[PortalComponent<React.FC<any>>], { close: Thunk } | undefined>
	close: Thunk<[string]>
	clear: Thunk
	layer: React.RefObject<HTMLDivElement | null>
	alerts: AlertCache
	setAlerts: React.Dispatch<React.SetStateAction<AlertCache>>
}

export type PortalManagerProperties = Pick<HTMLProperties<HTMLDivElement>, 'children' | 'className' | 'id'>



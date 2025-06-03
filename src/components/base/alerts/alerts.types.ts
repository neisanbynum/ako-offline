import type { Prettier } from '@/utils/types'
import type { IconDef } from '@neisanworks/types-react'

export type AlertVariant = 'default' | 'error' | 'success' | 'warning'


export type AlertBuild = {
	title?: string
	message: string
	icon?: IconDef
}

export type AlertOptions = Prettier<
	AlertBuild & {
		delay?: number
	}
>

export type CachedAlert = Prettier<
	AlertBuild & {
		id: string
		type: AlertVariant
		delay: number
	}
>

export type AlertCache = Array<CachedAlert>

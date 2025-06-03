import type { Prettier } from '@/utils/types'
import type { IconDef, HTMLProperties } from '@neisanworks/types-react'

type BaseModalOptions = {
	icon?: IconDef
	className?: HTMLProperties<HTMLDivElement>['className']
}

export type ModalOptions = Prettier<
	BaseModalOptions & {
		title: string
		desc?: string
	}
>

export type ConfirmModalOptions = Prettier<
	BaseModalOptions & {
		title?: string
		message: string
	}
>

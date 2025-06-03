import type { IconDef, Size } from '@neisanworks/types-react'

export type ButtonIconProperties = IconDef & {
	side?: 'left' | 'right'
}
export type ButtonProperties = Omit<HTMLButtonProperties, 'children'> & {
	size?: Size
	isLoading?: boolean
}
export type HTMLButtonProperties = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>

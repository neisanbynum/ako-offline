import type { Size, Styles, Variant } from '@neisanworks/types-react'
import { cn } from '@sglara/cn'
import type { HTMLButtonProperties } from './types'



export const ButtonStyleBlocks: Styles<string, HTMLButtonProperties['className']> = {
	layout: 'flex min-w-fit outline-none rounded-lg',
	text: 'font-medium text-center',
	shadow: 'shadow-md hover:shadow-xl active:shadow-lg disabled:shadow-none',
	action: 'cursor-pointer disabled:cursor-default touch-manipulation select-none disabled:opacity-50'
}

const Base = Object.values(ButtonStyleBlocks).join(' ')
const Ghost = Object.keys(ButtonStyleBlocks).filter((key) => key !== 'shadow').map((key) => ButtonStyleBlocks[key]).join(' ')

export const ButtonStyles: Styles<Variant, HTMLButtonProperties['className']> = {
	default: cn(Base, 'bg-primary text-primary-foreground'),
	secondary: cn(Base, 'bg-secondary text-secondary-foreground'),
	outline: cn(Base, 'bg-transparent border-4 border-secondary-foreground text-secondary-foreground'),
	destructive: cn(Base, 'bg-destructive text-primary-foreground'),
	ghost: Ghost
}
export const ButtonSizeStyles: Styles<Size, HTMLButtonProperties['className']> = {
	sm: 'w-8 h-8 px-2 py-1 text-sm',
	md: 'w-12 h-12 px-4 py-2 text-md',
	lg: 'w-16 h-16 px-6 py-3 text-lg'
}
export const IconButtonSizeStyles: Styles<Size, HTMLButtonProperties['className']> = {
	sm: 'w-8 h-8 p-2',
	md: 'w-12 h-12 p-3',
	lg: 'w-16 h-16 p-4'
}
export const ButtonIconSizes: Styles<Size, number> = {
	sm: 24,
	md: 32,
	lg: 40
}
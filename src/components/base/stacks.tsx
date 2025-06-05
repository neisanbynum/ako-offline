import type { HTMLProperties } from '@neisanworks/types-react'
import { cn } from '@sglara/cn'

export type StackProperties = HTMLProperties<HTMLDivElement>
export type StackComponent = React.FC<StackProperties>

type StackComponentVariants = 'Full' | 'Fit' | 'Overflow'
export type HStackComponent = StackComponent & Record<Exclude<StackComponentVariants, 'Fit'>, StackComponent>
export type VStackComponent = StackComponent & Record<Exclude<StackComponentVariants, 'Full'>, StackComponent>

const HStack: HStackComponent = ({ children, className, ...rest }) => (
	<div {...rest} className={cn('flex w-full h-fit justify-center items-center gap-4 overflow-hidden hidden-scroll', className)}>
		{children}
	</div>
)

HStack.Full = ({ children, className, ...rest }) => (
	<HStack {...rest} className={cn('h-full', className)}>
		{children}
	</HStack>
)

HStack.Overflow = ({ children, className, ...rest }) => (
	<HStack {...rest} className={cn('overflow-x-auto', className)}>
		{children}
	</HStack>
)

const VStack: VStackComponent = ({ children, className, ...rest }) => (
	<HStack {...rest} className={cn('flex-col h-full', className)}>
		{children}
	</HStack>
)

VStack.Fit = ({ children, className, ...rest }) => (
	<HStack {...rest} className={cn('flex-col min-h-fit', className)}>
		{children}
	</HStack>
)

VStack.Overflow = ({ children, className, ...rest }) => (
	<VStack {...rest} className={cn('overflow-y-auto', className)}>
		{children}
	</VStack>
)

export { HStack, VStack }

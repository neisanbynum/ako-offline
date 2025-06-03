import type { HTMLProperties } from "@neisanworks/types-react"
import { cn } from '@sglara/cn'

const StackClass = 'flex w-full h-fit justify-center items-center gap-4'
type StackProps = HTMLProperties<HTMLDivElement>
type StackComponent = React.FC<StackProps>


export const HStack: StackComponent = ({ children, className, ...props }) => {
	return (
		<div className={cn(StackClass, className)} {...props}>
			{children}
		</div>
	)
}

export const VStack: StackComponent = ({ children, className, ...props }) => {
	return (
		<div className={cn(StackClass, 'flex-col h-full', className)} {...props}>
			{children}
		</div>
	)
}
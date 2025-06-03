import type { HTMLProperties } from '@neisanworks/types-react'
import { cn } from '@sglara/cn'

export type SpinnerProperties = {
	size?: number
	className?: HTMLProperties<HTMLDivElement>['className']
}
export type SpinnerComponent = React.FC<SpinnerProperties>

const Spinner: SpinnerComponent = ({ size = 32, className }) => {
	return (
		<div
			className={cn(
				'border-t-transparent border-4 border-primary border-solid rounded-full animate-spin',
				className
			)}
			style={{ width: size, height: size }}
		/>
	)
}
Spinner.displayName = 'Spinner'

export { Spinner }

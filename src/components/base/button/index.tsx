import type { Variant, IconDef } from "@neisanworks/types-react"
import { cn } from "@sglara/cn"
import { Spinner } from "../spinner"
import { ButtonStyles, ButtonSizeStyles, ButtonIconSizes, IconButtonSizeStyles } from "./utils/styles"
import type { ButtonProperties, ButtonIconProperties } from "./utils/types"
import { useButtonHeight } from "./utils/useButtonHeight"


export type ButtonComponent = React.FC<
	ButtonProperties & {
		label?: string
		variant?: Variant
		icons?: Array<ButtonIconProperties>
	}
> & {
	Icon: React.FC<ButtonProperties & { icons?: Array<IconDef> }>
}

const Button: ButtonComponent = ({
	className,
	label,
	icons,
	variant = 'default',
	size = 'md',
	disabled,
	isLoading,
	...rest
}) => {
	const variantClass = cn(ButtonStyles[variant], ButtonSizeStyles[size])
	const button = useButtonHeight<HTMLDivElement>()

	return (
		<button
			{...rest}
			className={cn(variantClass, className)}
			disabled={disabled || isLoading}
			aria-busy={isLoading}
		>
			<div ref={button.ref} className={'flex w-full h-full justify-center items-center gap-4'}>
				{isLoading && (
					<Spinner
						size={Math.min(button.height, ButtonIconSizes[size])}
						className='transition-opacity duration-200 ease-in-out'
					/>
				)}
				{!isLoading && (
					<div className='flex w-full h-full justify-center items-center gap-1'>
						{icons
							?.filter((icon) => icon.side === 'left' || icon.side === undefined)
							.map((icon, index) => (
								<icon.icon
									key={index}
									size={Math.min(button.height, ButtonIconSizes[size])}
									className={icon.className}
								/>
							))}
						{label && <span>{label}</span>}
						{icons
							?.filter((icon) => icon.side === 'right')
							.map((icon, index) => (
								<icon.icon
									key={index}
									size={Math.min(button.height, ButtonIconSizes[size])}
									className={icon.className}
								/>
							))}
					</div>
				)}
			</div>
		</button>
	)
}
Button.displayName = 'Button'

const IconButton: typeof Button.Icon = ({ className, size = 'md', icons, disabled, isLoading, ...rest }) => {
	const variantClass = cn(ButtonStyles.ghost, 'w-fit h-fit', IconButtonSizeStyles[size])
	const button = useButtonHeight<HTMLDivElement>()

	return (
		<button
			{...rest}
			className={cn(variantClass, className)}
			disabled={disabled || isLoading}
			aria-busy={isLoading}
		>
			<div ref={button.ref} className={'flex w-full h-full justify-center items-center gap-4'}>
				{isLoading && (
					<Spinner
						size={Math.min(button.height, ButtonIconSizes[size])}
						className='transition-opacity duration-200 ease-in-out'
					/>
				)}
				{!isLoading &&
					icons &&
					icons.map((icon, index) => (
						<icon.icon
							key={index}
							size={Math.min(button.height, ButtonIconSizes[size])}
							className={icon.className}
						/>
					))}
			</div>
		</button>
	)
}
IconButton.displayName = 'Button.Icon'
Button.Icon = IconButton

export { Button }

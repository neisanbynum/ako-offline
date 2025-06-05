import type { Icon as LucideIcon } from '@neisanworks/types-react'
import { cn } from '@sglara/cn'

export type IconProperties = {
	icon: LucideIcon
	className?: React.SVGAttributes<SVGSVGElement>['className']
	hidden?: boolean
}
export type IconComponent = React.FC<IconProperties>

export const Icon: IconComponent = ({ ...props }) => {
	if (!props.icon || props.hidden) return null
	return <props.icon className={cn('w-6 h-6', props.className)} />
}

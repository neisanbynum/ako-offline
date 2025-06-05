import type { Prettier } from '@/utils/types'
import type { HTMLProperties } from '@neisanworks/types-react'
import { cn } from '@sglara/cn'

export type TitleProperties = Prettier<HTMLProperties<HTMLParagraphElement> & { title?: string }>
export type TitleComponent = React.FC<TitleProperties>

export const Title: TitleComponent = ({ title, className, ...rest }) => (
	<p {...rest} className={cn('text-lg font-semibold', className)}>
		{title}
	</p>
)

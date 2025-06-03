import type { Prettier } from '@/utils/types'
import type { HTMLProperties } from '@neisanworks/types-react'
import { cn } from '@sglara/cn'

export type CardTitleProperties = Prettier<Omit<HTMLProperties<HTMLDivElement>, 'children'> & { title?: string }>
export type CardTitleComponent = React.FC<CardTitleProperties>

const CardTitle: CardTitleComponent = ({ title, className, ...rest }) => {
	return (
		<p {...rest} className={cn('text-lg font-semibold', className)}>
			{title}
		</p>
	)
}
CardTitle.displayName = 'Card.Title'

export { CardTitle }

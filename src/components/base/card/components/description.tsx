import type { Prettier } from '@/utils/types'
import type { HTMLProperties } from '@neisanworks/types-react'
import { cn } from '@sglara/cn'

export type CardDescriptionProperties = Prettier<Omit<HTMLProperties<HTMLDivElement>, 'children'> & { desc?: string }>
export type CardDescriptionComponent = React.FC<CardDescriptionProperties>

const CardDescription: CardDescriptionComponent = ({ desc, className, ...rest }) => {
	return (
		<p {...rest} className={cn('text-sm text-muted-foreground', className)}>
			{desc}
		</p>
	)
}
CardDescription.displayName = 'Card.Description'

export { CardDescription }

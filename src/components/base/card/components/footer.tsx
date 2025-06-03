import { cn } from '@sglara/cn'
import { VStack } from '../../stacks'
import type { Prettier } from '@/utils/types'
import type { HTMLProperties } from '@neisanworks/types-react'

export type CardFooterProperties = Prettier<HTMLProperties<HTMLDivElement>>
export type CardFooterComponent = React.FC<CardFooterProperties>

const CardFooter: CardFooterComponent = ({ children, className, ...rest }) => (
	<VStack {...rest} className={cn('h-fit justify-start gap-2', className)}>
		{children}
	</VStack>
)
CardFooter.displayName = 'Card.Footer'

export { CardFooter }

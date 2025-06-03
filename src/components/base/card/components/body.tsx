import type { HTMLProperties } from '@neisanworks/types-react'
import { VStack } from '../../stacks'
import { cn } from '@sglara/cn'
import type { Prettier } from '@/utils/types'

export type CardBodyProperties = Prettier<HTMLProperties<HTMLDivElement>>
export type CardBodyComponent = React.FC<CardBodyProperties>

const CardBody: CardBodyComponent = ({ children, className, ...rest }) => (
	<VStack {...rest} className={cn('min-w-fit h-fit gap-2 p-4', className)}>
		{children}
	</VStack>
)
CardBody.displayName = 'Card.Body'

export { CardBody }

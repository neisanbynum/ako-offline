import type { HTMLProperties } from '@neisanworks/types-react'
import { VStack } from '../stacks'
import { cn } from '@sglara/cn'
import type { Prettier } from '@/utils/types'
import { CardHead } from './components/head'
import { CardTitle } from './components/title'
import { CardDescription } from './components/description'
import { CardBody } from './components/body'
import { CardFooter } from './components/footer'


export type CardProperties = Prettier<HTMLProperties<HTMLDivElement>>
type CardComponent = React.FC<CardProperties> & {
	Head: typeof CardHead
	Title: typeof CardTitle
	Description: typeof CardDescription
	Body: typeof CardBody
	Footer: typeof CardFooter
}

const Card: CardComponent = ({ children, className, ...rest }) => {
	return (
		<VStack
			{...rest}
			className={cn(
				'w-fit min-h-fit h-fit justify-between gap-0 bg-card text-card-foreground border-2 rounded-xl shadow hover:shadow-lg overflow-hidden',
				className
			)}
		>
			{children}
		</VStack>
	)
}
Card.displayName = 'Card'

Card.Head = CardHead
Card.Title = CardTitle
Card.Description = CardDescription
Card.Body = CardBody
Card.Footer = CardFooter

export { Card }

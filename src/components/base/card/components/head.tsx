import type { Prettier } from '@/utils/types'
import type { HTMLProperties, IconDef } from '@neisanworks/types-react'
import { cn } from '@sglara/cn'
import { CardTitle } from './title'
import { HStack, VStack } from '../../stacks'
import { CardDescription } from './description'
import React from 'react'

export type CardHeadProperties = Prettier<
	HTMLProperties<HTMLDivElement> & {
		icon?: IconDef
		title?: string
		desc?: string
		trailing?: React.ReactElement
	}
>
export type CardHeadComponent = React.FC<CardHeadProperties>

const CardHead: CardHeadComponent = ({ children, className, icon, title, desc, trailing, ...rest }) => {
	if (title || desc || trailing) {
		return (
			<Shell {...rest} className={cn('pt-4 px-4', className)}>
				{icon && <icon.icon className={cn('w-8 h-8', icon.className)} />}
				<VStack className='h-fit items-start gap-0'>
					{title && <CardTitle title={title} />}
					{desc && <CardDescription desc={desc} />}
				</VStack>
				{trailing}
			</Shell>
		)
	}

	return <Shell {...rest} className={className}>{children}</Shell>
}
CardHead.displayName = 'Card.Head'

type ShellProperties = Prettier<HTMLProperties<HTMLDivElement>>
type ShellComponent = React.FC<ShellProperties>
const Shell: ShellComponent = ({ children, className, ...rest }) => (
	<HStack {...rest} className={cn('justify-between gap-0', className)}>
		{children}
	</HStack>
)

export { CardHead }

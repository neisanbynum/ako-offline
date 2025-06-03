import { cn } from '@sglara/cn'
import { useInputContext } from '../utils/context'
import type { InputProperties } from '../utils/types'

export type InputDescriptionProperties = Pick<InputProperties, 'className' | 'desc'>
export type InputDescriptionComponent = React.FC<InputDescriptionProperties>

export const InputDescription: InputDescriptionComponent = ({ className, desc }) => {
	const { ids } = useInputContext()

	if (!desc) return null

	return (
		<p id={ids.desc} className={cn('text-xs text-muted-foreground pl-1', className)}>
			{desc}
		</p>
	)
}

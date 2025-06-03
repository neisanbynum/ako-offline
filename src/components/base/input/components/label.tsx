import { cn } from '@sglara/cn'
import { useInputContext } from '../utils/context'
import type { InputProperties } from '../utils/types'

export type LabelProperties = Pick<InputProperties, 'label' | 'showLabel' | 'className'>
export type LabelComponent = React.FC<LabelProperties>

const InputLabel: LabelComponent = ({ showLabel = 'always', label, className }) => {
	const { ids, value, error } = useInputContext()

	const classes: Record<typeof showLabel | 'base', string> = {
		base: 'font-semibold text-sm pl-1',
		always: '',
		dynamic: `transition-opacity duration-200 ${!!value ? 'opacity-100' : 'opacity-0'}`,
		none: 'sr-only'
	}


	if (!label || label === '' || showLabel === 'none') return null
	return (
		<label
			htmlFor={ids.input}
			id={ids.label}
			className={cn(classes.base, classes[showLabel], className, error && 'text-destructive')}
		>
			{label}
		</label>
	)
}

export { InputLabel }

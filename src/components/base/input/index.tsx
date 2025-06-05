import type { InputComponent } from './utils/types'
import { cn } from '@sglara/cn'
import { VStack } from '../stacks'
import { InputProvider } from './utils/provider'
import { InputLabel } from './components/label'
import { InputEntry } from './components/entry'
import { InputDescription } from './components/description'
import { InputError } from './components/error'

const Input: InputComponent = ({
	className,
	classNames,
	showLabel = 'always',
	label,
	desc,
	error,
	placeholder,
	onChange,
	value,
	id,
	clearable = false,
	...rest
}) => {
	if (showLabel === 'dynamic') placeholder = label ?? placeholder

	return (
		<InputProvider id={id} value={value} onChange={onChange} error={error}>
			<VStack.Fit className={cn('w-24 items-start gap-0.5', className)}>
				<InputLabel showLabel={showLabel} label={label} className={classNames?.label} />
				<InputEntry
					{...rest}
					className={classNames?.input}
					label={label}
					placeholder={placeholder}
					clearable={clearable}
				/>
				<InputDescription className={classNames?.desc} desc={desc} />
				<InputError className={classNames?.error} />
			</VStack.Fit>
		</InputProvider>
	)
}

export { Input }

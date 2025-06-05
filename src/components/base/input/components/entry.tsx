import { cn } from '@sglara/cn'
import { X } from 'lucide-react'
import { Button } from '../../button'
import { HStack } from '../../stacks'
import { useInputContext } from '../utils/context'
import type { InputProperties } from '../utils/types'
import React from 'react'
import ChangeEvent from '@/utils/react/change-event'

export type InputEntryProperties = Omit<InputProperties, 'classNames' | 'showLabel' | 'desc' | 'error'>
export type InputEntryComponent = React.FC<InputEntryProperties>

export const InputEntry: InputEntryComponent = ({ className, label, clearable = false, ...rest }) => {
	const { ids, value, handleChange, error } = useInputContext()

	const clear = () => {
		const target = document.getElementById(ids.input) as HTMLInputElement
		if (target) {
			target.value = ''
			handleChange(new ChangeEvent(target))
		}
	}

	return (
		<HStack className={'p-0.5 gap-0 relative'}>
			<input
				{...rest}
				id={ids.input}
				aria-label={label}
				aria-invalid={!!error}
				aria-errormessage={error}
				aria-describedby={ids.desc}
				value={value}
				onChange={handleChange}
				className={cn(
					'w-full h-10 rounded-sm border focus:ring-2 ring-slate-700 outline-none focus:outline-none px-2 bg-slate-50 dark:bg-slate-800 dark:text-slate-50 overflow-hidden',
					className,
					error ? 'border-destructive ring-destructive/50' : 'border-input'
				)}
			/>
			<Button.Icon
				id={ids.clear}
				hidden={!value || !clearable}
				size={'sm'}
				className={'absolute right-0.5 z-10'}
				icons={[{ icon: X }]}
				onClick={clear}
			/>
		</HStack>
	)
}

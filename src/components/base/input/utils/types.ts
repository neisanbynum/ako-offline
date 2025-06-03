import type { Prettier } from "@/utils/types";
import type { Thunk } from "@neisanworks/types-react";

export type HTMLInputProperties = Prettier<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>

export type InputSubComponent = 'label' | 'input' | 'clear' | 'desc' | 'error'
export type InputClassNames = Record<InputSubComponent, string | undefined>
export type InputIDs = Record<InputSubComponent, string>

export type InputProperties = Prettier<Omit<HTMLInputProperties, 'children'> & {
	classNames?: InputClassNames
	showLabel?: 'always' | 'dynamic' | 'none'
	clearable?: boolean
	label?: string
	desc?: string
	error?: string
}>
export type InputComponent = React.FC<InputProperties>

export type useInputContextReturn = {
	ids: InputIDs
	value: HTMLInputProperties['value']
	handleChange: React.ChangeEventHandler<HTMLInputElement>
	error?: string
}
export type useInputContextHook = Thunk<[], useInputContextReturn>

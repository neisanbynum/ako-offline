import React, { useId } from 'react'
import { InputIDs } from './ids'
import type { HTMLInputProperties, InputProperties } from './types'
import { InputContext } from './context'

export type InputProviderProperties = Pick<InputProperties, 'id' | 'value' | 'showLabel' | 'error'>
export type InputProviderComponent = React.FC<React.PropsWithChildren<InputProperties>>

const InputProvider: InputProviderComponent = ({ id, children, value, onChange, error }) => {
	if (!id) id = useId()
	const ids = React.useMemo(() => new InputIDs(id), [id])
	const [entry, setEntry] = React.useState<HTMLInputProperties['value']>(value)

	React.useEffect(() => setEntry(value), [value])

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setEntry(e.target.value)
		if (onChange) onChange(e)
	}

	return (
		<InputContext.Provider value={{ ids, value: entry, handleChange, error }}>
			{children}
		</InputContext.Provider>
	)
}

export { InputProvider }

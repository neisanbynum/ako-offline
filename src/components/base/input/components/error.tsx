import { cn } from "@sglara/cn";
import { useInputContext } from "../utils/context";
import type { InputProperties } from "../utils/types";

export type InputErrorProperties = Pick<InputProperties, 'className'>
export type InputErrorComponent = React.FC<InputErrorProperties>

export const InputError: InputErrorComponent = ({ className }) => {
	const { ids, error } = useInputContext()

	if (!error) return null

	return (
		<p id={ids.error} className={cn('text-xs text-destructive pl-1', className)}>
			{error}
		</p>
	)
}
import { HStack } from '@/components/base/stacks'
import type { HTMLProperties } from '@neisanworks/types-react'
import { cn } from '@sglara/cn'
import { ThemeToggle } from './theme-toggle'

export type TopbarProperties = Pick<HTMLProperties<HTMLDivElement>, 'ref' | 'className'>
export type TopbarComponent = React.FC<TopbarProperties>

export const Topbar: TopbarComponent = ({ ref, className }) => {
	return (
		<HStack ref={ref} className={cn('h-12 p-2 justify-between bg-slate-50 dark:bg-black border', className)}>
			<p className={'font-semibold'}>AKOffline</p>
			<HStack.Full className={'w-fit gap-2'}>
				<ThemeToggle />
			</HStack.Full>
		</HStack>
	)
}

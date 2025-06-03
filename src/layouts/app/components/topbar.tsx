import { HStack } from "@/components/base/stacks"
import { ThemeToggle } from "./theme-toggle"

export type TopbarProperties = { ref?: React.Ref<HTMLDivElement> }
export type TopbarComponent = React.FC<TopbarProperties>

const Topbar: TopbarComponent = ({ ref }) => (
	<HStack ref={ref} className={'fixed top-0 left-0 h-12 p-2 justify-between bg-slate-50 dark:bg-black border'}>
		<p className={'font-semibold'}>AKOffline</p>
		<HStack className={'w-fit h-full gap-2'}>
			<ThemeToggle />
		</HStack>
	</HStack>
)
Topbar.displayName = 'App.Topbar'

export { Topbar }

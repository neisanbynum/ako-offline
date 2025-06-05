import { VStack } from '@/components/base/stacks'
import { Topbar } from './component/topbar'
import { Outlet } from 'react-router'

export const AppLayout: React.FC = () => {
	return (
		<VStack className={'relative w-screen h-screen gap-0'}>
			<Topbar />
			<VStack>
				<Outlet />
			</VStack>
		</VStack>
	)
}

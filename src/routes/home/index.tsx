import { VStack } from '@/components/base/stacks'
import { HomeProvider } from './utils/provider'
import { SearchBar } from './components/search-bar'
import { SiteCards } from './components/site-cards'
import { Card } from '@/components/base/card'

export const HomeRoute: React.FC = () => {
	return (
		<HomeProvider>
			<VStack className={'gap-0 overflow-x-hidden overflow-y-auto'}>
				<VStack className={'h-fit p-4 pb-0'}>
					<SearchBar className={'w-1/2 min-w-98'} />
					<Card.Title title='Popular Sites' />
				</VStack>
				<VStack className={'justify-start p-4 overflow-x-hidden overflow-y-auto'}>
					<SiteCards />
				</VStack>
			</VStack>
		</HomeProvider>
	)
}

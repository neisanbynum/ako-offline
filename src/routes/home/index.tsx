import { VStack } from "@/components/base/stacks"
import { Title } from "@/components/base/title"
import { SearchBar } from "./component/search-bar"
import { SiteCard } from "./component/site-card"
import { HomeProvider, useHomeContext } from "./utils/context"


export const HomeRoute: React.FC = () => {
	return (
		<HomeProvider>
			<VStack className={'gap-0'}>
				<VStack.Fit className={'z-10 px-4 py-2'}>
					<SearchBar className={'min-w-98 w-1/2'} />
					<Title title={'Popular Sites'} />
				</VStack.Fit>
				<VStack.Overflow className={'justify-start p-4 pt-2'}>
					<SiteDisplay />
				</VStack.Overflow>
			</VStack>
		</HomeProvider>
	)
}

const SiteDisplay = () => {
	const { sites } = useHomeContext()

	return <>{sites.map((site) => <SiteCard key={site.url} site={site} />)}</>
}
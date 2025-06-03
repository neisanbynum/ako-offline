import { HStack, VStack } from '@/components/base/stacks'
import { useHomeContext } from '../utils/context'
import { Card } from '@/components/base/card'
import { UserLock } from 'lucide-react'
import type { ArmySiteDefinition } from '@/utils/data/army-sites'
import { useShowURL } from '@/utils/hooks/useShowURL'

export const SiteCards: React.FC = () => {
	const { sites } = useHomeContext()

	return (
		<VStack className={'justify-start overflow-x-hidden overflow-y-auto'}>
			{sites.map((site) => (
				<SiteCard key={site.url} site={site} />
			))}
		</VStack>
	)
}

type SiteCardProperties = {
	site: ArmySiteDefinition
}
type SiteCardComponent = React.FC<SiteCardProperties>

export const SiteCard: SiteCardComponent = ({ site }) => {
	const { showURL, closeURL } = useShowURL()

	return (
		<Card
			className={'relative w-full'}
			role={'link'}
			onClick={() => window.open(site.url, '_blank')}
			onMouseEnter={() => showURL(site.url)}
			onMouseLeave={() => closeURL(site.url)}
		>
			<HStack className={'h-full'}>
				{/* <img src={site.photo} className='w-98' /> */}
				<VStack className='justify-between items-start p-4'>
					<VStack className='gap-1 h-fit justify-start items-start'>
						<HStack className='justify-start'>
							<Card.Title title={site.title} />
							{site.cac && <UserLock />}
						</HStack>
						<Card.Description desc={site.desc} />
					</VStack>
					{/* <Card.Head className='p-0' title={site.title} desc={site.desc} /> */}
					<span hidden={!site.note} className={'text-sm font-semibold'}>
						{site.note}
					</span>
				</VStack>
			</HStack>
		</Card>
	)
}

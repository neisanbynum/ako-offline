import { Card } from '@/components/base/card'
import { Icon } from '@/components/base/icon'
import { HStack, VStack } from '@/components/base/stacks'
import { Title } from '@/components/base/title'
import type { ArmySiteDefinition } from '@/utils/data/army-sites'
import { useShowURL } from '@/utils/hooks/useShowURL'
import { UserLock } from 'lucide-react'

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
			<HStack.Full>
				<VStack className='justify-between items-start p-4'>
					<VStack.Fit className='gap-1 justify-start items-start'>
						<HStack className='w-fit'>
							<Card.Title title={site.title} />
							<Icon icon={UserLock} hidden={!site.cac} />
						</HStack>
						<Card.Description desc={site.desc} />
					</VStack.Fit>
					<Title hidden={!site.note} title={site.note} className='text-sm' />
				</VStack>
			</HStack.Full>
		</Card>
	)
}

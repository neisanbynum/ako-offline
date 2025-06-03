import { usePortalManager } from "@/components/base/portals/portals.context"
import type { PortalComponent } from "@/components/base/portals/portals.types"

const useShowURL = () => {
	const { open, close } = usePortalManager()

	const showURL = (url: string) => {
		const portal: PortalComponent<typeof URLDisplay> = {
			id: url,
			component: URLDisplay,
			props: { url }
		}

		open(portal)
	}

	const closeURL = (url: string) => close(url)

	return { showURL, closeURL }
}

type URLDisplayProperties = {
	url: string
}
type URLDisplayComponent  = React.FC<URLDisplayProperties>
const URLDisplay: URLDisplayComponent = ({ url }) => (
	<div className="flex bg-slate-50 dark:bg-black p-2 fixed bottom-0 left-0 overflow-hidden">
		<span className="text-xs text-nowrap">{url}</span>
	</div>
)

export { useShowURL }
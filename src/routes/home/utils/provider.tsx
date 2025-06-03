import React from "react";
import { HomeContext } from "./context";
import { ArmySites } from "@/utils/data/army-sites";

export type HomeProviderComponent = React.FC<React.PropsWithChildren>

export const HomeProvider: HomeProviderComponent = ({ children }) => {
	const [search, setSearch] = React.useState<string>('')

	const sites = React.useMemo(() => {
		if (!search) return ArmySites
		const titles: Array<string> = []
		// Filter for matching titles first
		ArmySites.forEach(site => {
			const title = site.title.toLowerCase()
			if (title.includes(search.toLowerCase()) && !titles.includes(title)) titles.push(title)
		})
		// Filter for matching descriptions second
		ArmySites.forEach(site => {
			const title = site.title.toLowerCase()
			const desc = site.desc.toLowerCase()
			if (desc.includes(search.toLowerCase()) && !titles.includes(title)) titles.push(title)
		})
		// Return filtered site
		return ArmySites.filter(site => titles.includes(site.title.toLowerCase()))
	}, [search, ArmySites])

	return (
		<HomeContext.Provider value={{ search, setSearch, sites }}>
			{children}
		</HomeContext.Provider>
	)
}
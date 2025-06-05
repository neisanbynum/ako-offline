import { ArmySites, type ArmySiteDefinition } from '@/utils/data/army-sites'
import type { Nullable } from '@/utils/types'
import React from 'react'
import type { useHomeContextReturn } from '../types'

export const HomeContext = React.createContext<Nullable<useHomeContextReturn>>(null)

export type HomeProviderComponent = React.FC<React.PropsWithChildren>

export const HomeProvider: HomeProviderComponent = ({ children }) => {
	const [search, setSearch] = React.useState<string>('')

	const sites = React.useMemo(() => {
		if (!search) return ArmySites
		const titles: Array<string> = []

		const match = (
			str: string,
			site: ArmySiteDefinition,
			key: keyof Pick<ArmySiteDefinition, 'title' | 'desc'>
		) => {
			const title = site.title.toLowerCase()
			const toSearch = site[key].toLowerCase()
			if (toSearch.includes(str.toLowerCase()) && !titles.includes(title)) titles.push(title)
		}

		ArmySites.forEach((site) => {
			match(search, site, 'title')
			match(search, site, 'desc')
		})

		return ArmySites.filter((site) => titles.includes(site.title.toLowerCase()))
	}, [search])

	return (
		<HomeContext.Provider value={{ search, setSearch, sites }}>
			{children}
		</HomeContext.Provider>
	)
}

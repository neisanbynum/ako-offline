import type { ArmySiteDefinitions } from "@/utils/data/army-sites"
import type { Thunk } from "@neisanworks/types-react"

export type useHomeContextReturn = {
	search: string
	setSearch: React.Dispatch<React.SetStateAction<string>>
	sites: ArmySiteDefinitions
}

export type useHomeContextHook = Thunk<[], useHomeContextReturn>
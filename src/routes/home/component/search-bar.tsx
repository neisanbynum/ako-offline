import { useHomeContext } from '../utils/context'
import { Input } from '@/components/base/input'
import React from 'react'
import type { InputProperties } from '@/components/base/input/utils/types'

export type SearchbarProperties = Pick<InputProperties, 'className'>
export type SearchbarComponent = React.FC<SearchbarProperties>

const SearchBar: SearchbarComponent = ({ className }) => {
	const { search, setSearch } = useHomeContext()

	return (
		<Input
			label={'Search Army Links'}
			clearable
			type={'text'}
			id={'army-link-search'}
			autoComplete={'off'}
			className={className}
			value={search}
			onChange={(e) => setSearch(e.target.value)}
			placeholder='Search'
			showLabel={'dynamic'}
		/>
	)
}
SearchBar.displayName = 'HomePage.Link.SearchBar'

export { SearchBar }

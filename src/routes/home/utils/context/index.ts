import React from 'react'
import type { useHomeContextHook } from '../types'
import { HomeContext } from './provider'

export const useHomeContext: useHomeContextHook = () => {
	const context = React.useContext(HomeContext)
	if (!context) throw new Error('useHomeContext must be used within HomeProvider')
	return context
}

export { HomeProvider } from './provider'
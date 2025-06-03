import React from 'react'
import type { Nullable } from '../types'
import type { Thunk } from '@neisanworks/types-react'

export type Theme = 'dark' | 'light'

export type useThemeReturn = {
	theme: Theme
	setTheme: Thunk<[Theme]>
	toggleTheme: Thunk
}
type useThemeHook = Thunk<[Theme?, string?], useThemeReturn>

export const useTheme: useThemeHook = (defaultTheme, localStorageKey) => {
	const key = localStorageKey ?? 'ako-offline-theme'
	const [theme, setTheme] = React.useState<Theme>(defaultTheme ?? 'dark')

	React.useEffect(() => {
		const saved = localStorage.getItem(key) as Nullable<Theme>
		if (saved) {
			setAppTheme(saved)
		} else {
			setAppTheme(theme)
		}
	}, [])

	const setAppTheme = (theme: Theme) => {
		const root = window.document.documentElement
		root.classList.remove('light', 'dark')
		root.classList.add(theme)
		localStorage.setItem(key, theme)
		setTheme(theme)
	}

	const toggleTheme = () => setAppTheme(theme === 'dark' ? 'light' : 'dark')

	return { theme, setTheme, toggleTheme }
}

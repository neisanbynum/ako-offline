import type { Nullable } from '@/utils/types'
import type { Thunk } from '@neisanworks/types-react'
import React from 'react'


export type useButtonHeightReturn<T extends HTMLDivElement | HTMLButtonElement> = { height: number; ref: React.RefObject<Nullable<T>> }

export function useButtonHeight<T extends HTMLDivElement | HTMLButtonElement>(): useButtonHeightReturn<T>
export function useButtonHeight(ref: React.RefObject<HTMLDivElement>): useButtonHeightReturn<HTMLDivElement>
export function useButtonHeight(ref: React.RefObject<HTMLButtonElement>): useButtonHeightReturn<HTMLButtonElement>
export function useButtonHeight<T extends HTMLDivElement | HTMLButtonElement>(ref?: React.RefObject<T>): useButtonHeightReturn<T> {
	const [height, setHeight] = React.useState<number>(0)
	const defaultRef = React.useRef<Nullable<T>>(null)

	React.useLayoutEffect(() => {
		const node: T | null = ref?.current ?? defaultRef.current
		if (!node) return

		const update: Thunk = () => setHeight(node.getBoundingClientRect().height)

		update()

		const observer = new ResizeObserver(update)
		observer.observe(node)

		return () => observer.disconnect()
	}, [])

	return { height, ref: ref ?? defaultRef }
}


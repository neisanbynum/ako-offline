import { VStack } from '@/components/base/stacks'
import React from 'react'
import { Outlet } from 'react-router'
import { Topbar } from './components/topbar'

export const AppLayout: React.FC = () => {
	const refs = {
		topbar: React.useRef<HTMLDivElement>(null),
		page: React.useRef<HTMLDivElement>(null)
	}

	React.useLayoutEffect(() => {
		const topbar = refs.topbar.current
		const page = refs.page.current
		if (!topbar || !page) return

		const update = () => {
			const topbarHeight = topbar.clientHeight
			page.style.top = `${topbarHeight}px`
		}

		update()

		const observer = new ResizeObserver(update)
		observer.observe(topbar)

		return () => observer.disconnect()
	}, [])

	return (
		<VStack className='w-screen h-screen overflow-x-hidden overflow-y-scroll hidden-scroll'>
			<Topbar ref={refs.topbar} />
			<VStack className='fixed left-0 overflow-x-hidden overflow-y-scroll hidden-scroll' ref={refs.page}>
				<Outlet />
			</VStack>
		</VStack>
	)
}

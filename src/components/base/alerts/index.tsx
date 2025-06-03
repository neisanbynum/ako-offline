import type { Prettier } from '@/utils/types'
import type { AlertBuild, AlertOptions, AlertVariant } from './alerts.types'
import type { HTMLProperties, Styles, Thunk } from '@neisanworks/types-react'
import { cn } from '@sglara/cn'
import { usePortalManager } from '../portals/portals.context'
import React from 'react'

const variants: Styles<AlertVariant> = {
	default: 'bg-blue-500 border-blue-500 dark:bg-blue-900 dark:border-blue-900 text-slate-50',
	success: 'bg-green-500 border-green-500 text-slate-50 dark:bg-green-800 dark:border-green-800',
	error: 'bg-destructive border-destructive text-slate-50',
	warning: 'bg-amber-500 border-amber-500 text-slate-50 dark:bg-amber-600 dark:border-amber-600'
}

type PushAlertThunk = Thunk<[AlertVariant], Thunk<[AlertOptions]>>

export const useAlert = (defaultDelay: number = 3000) => {
	const { alerts, setAlerts, open, close } = usePortalManager()

	React.useEffect(() => {
		if (alerts.length === 0) return

		const { id, title, message, icon, delay, type } = alerts[0]

		open({
			id,
			component: Alert,
			props: { title, message, icon, className: variants[type] }
		})

		const timeout = setTimeout(() => {
			close(alerts[0].id)
			setAlerts((prev) => prev.slice(1))
		}, delay)

		return () => clearTimeout(timeout)
	}, [alerts.length])

	const pushAlert: PushAlertThunk =
		(type) =>
		({ title, message, icon, delay = defaultDelay }) => {
			const exists = alerts.some((a) => a.title === title && a.message === message)
			if (exists) return

			const id = `alert-${Date.now()}`
			setAlerts((prev) => [...prev, { id, title, message, icon, delay, type }])
		}

	return {
		alert: pushAlert('default'),
		success: pushAlert('success'),
		error: pushAlert('error'),
		warning: pushAlert('warning')
	}
}

type AlertProperties = Prettier<
	AlertBuild & {
		className?: HTMLProperties<HTMLDivElement>['className']
	}
>
type AlertComponent = React.FC<AlertProperties>

const Alert: AlertComponent = ({ title, message, icon, className }) => {
	return (
		<div
			className={cn(
				'fixed top-4 right-4 pointer-events-auto flex min-w-72 h-fit justify-center items-center rounded-md p-2 gap-2 border-2 shadow-xl',
				className
			)}
		>
			{icon && <icon.icon className={cn(icon.className, 'w-8 h-8')} />}
			<div className='flex flex-col w-full h-fit justify-center items-start'>
				{title && <p className='font-semibold text-md'>{title}</p>}
				<p className='text-sm'>{message}</p>
			</div>
		</div>
	)
}

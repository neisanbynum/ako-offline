import type React from 'react'
import type { Prettier } from '../types'

export type ChangeEventInit<T extends Element = Element> = Prettier<
	Partial<
		Omit<
			React.ChangeEvent<T>,
			| 'target'
			| 'type'
			| 'nativeEvent'
			| 'preventDefault'
			| 'stopPropagation'
			| 'isDefaultPrevented'
			| 'isPropagationStopped'
			| 'persist'
		>
	>
>

export default class ChangeEvent<T extends Element = Element> implements React.ChangeEvent<T> {
	target: EventTarget & T
	currentTarget: EventTarget & T
	type: string = 'change'
	nativeEvent: Event
	bubbles: boolean
	cancelable: boolean
	defaultPrevented: boolean
	isTrusted: boolean
	eventPhase: number
	timeStamp: number

	constructor(target: React.ChangeEvent<T>['target'], options?: ChangeEventInit<T>) {
		const { currentTarget, bubbles, cancelable, defaultPrevented, isTrusted, eventPhase, timeStamp } = options ?? {}

		this.target = target
		this.currentTarget = currentTarget ?? target
		this.bubbles = bubbles ?? true
		this.cancelable = cancelable ?? true
		this.nativeEvent = new Event('change', { bubbles: bubbles ?? true, cancelable: cancelable ?? true })
		this.defaultPrevented = defaultPrevented ?? false
		this.isTrusted = isTrusted ?? true
		this.eventPhase = eventPhase ?? Event.AT_TARGET
		this.timeStamp = timeStamp ?? Date.now()
	}

	preventDefault(): void {
		this.defaultPrevented = true
	}

	stopPropagation(): void {
		this.bubbles = false
	}

	isDefaultPrevented(): boolean {
		return this.defaultPrevented
	}

	isPropagationStopped(): boolean {
		return !this.bubbles
	}

	persist(): void {}
}

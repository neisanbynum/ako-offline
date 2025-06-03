import type { Prettier } from "@/utils/types"
import type { Thunk } from "@neisanworks/types-react"
import { cn } from "@sglara/cn"
import { X } from "lucide-react"
import { Button } from "../../button"
import { Card } from "../../card"
import { VStack } from "../../stacks"
import type { ModalOptions } from "../modal.types"


type ModalWrapperProperties = Prettier<React.PropsWithChildren<ModalOptions & { close?: Thunk }>>
type ModalWrapperComponent = React.FC<ModalWrapperProperties>

const ModalWrapper: ModalWrapperComponent = ({ children, title, desc, icon, className, close }) => (
	<Card
		aria-modal
		role='dialog'
		className={cn('min-w-xs w-fit fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', className)}
	>
		<ModalTopbar title={title} desc={desc} icon={icon} close={close} />
		<Card.Body>{children}</Card.Body>
	</Card>
)

type ModalTopbarProperties = Omit<ModalWrapperProperties, 'children' | 'className'>
type ModalTopbarComponent = React.FC<ModalTopbarProperties>
const ModalTopbar: ModalTopbarComponent = ({ title, desc, icon, close }) => {
	const CloseButton = () => {
		if (!close) return null
		return (
			<VStack className='w-fit h-full justify-start'>
				<Button.Icon size='sm' onClick={close} icons={[{ icon: X, className: 'w-6 h-6' }]} />
			</VStack>
		)
	}

	return <Card.Head icon={icon} title={title} desc={desc} trailing={<CloseButton />} />
}

export { ModalWrapper }

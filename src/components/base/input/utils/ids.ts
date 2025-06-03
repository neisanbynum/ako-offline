export class InputIDs {
	readonly id: string
	readonly label: string
	readonly input: string
	readonly clear: string
	readonly desc: string
	readonly error: string

	constructor(id: string) {
		this.id = id
		this.label = `${id}-label`
		this.input = `${id}-input`
		this.clear = `${id}-clear`
		this.desc = `${id}-desc`
		this.error = `${id}-error`
	}
}
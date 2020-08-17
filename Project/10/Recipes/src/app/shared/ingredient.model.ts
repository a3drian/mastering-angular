export class Ingredient {
	public name: String = '';
	public amount: number = 0;

	constructor(name: String, amount: number) {
		this.name = name;
		this.amount = amount;
	}

	public toString = (): string => {
		return `${this.name}, ${this.amount}`;
	}
}
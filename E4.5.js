class Device {
	constructor(name, power){
	this.name = name,
	this.power = power
	}
	switchOn() {
		console.log(`${this.name}, включение в розетку...`)
	}
	switchOff() {
		console.log(`${this.name}, отключение от розетки...`)
	}
}


class Kettle extends Device {
	constructor(name, power, model){
	super(name, power),
	this.name = name,
	this.power = power,
	this.model = model
	}
	boil() {
		console.log(`${this.name}, Включено кипячение...`)
	}
}

class Oven extends Device {
	constructor(name, power, model) {
	super(name, power),
	this.name = name,
	this.power = power,
	this.model = model
	}
	bake() {
		console.log(`${this.name}, Включено запекание...`)
	}
}


const R2D2 = new Kettle("Чайник", "800", "redmond")
const H2D2 = new Oven("Духовка", "1500", "hansa")


R2D2.switchOn()
R2D2.boil()
H2D2.bake()
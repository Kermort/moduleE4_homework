function Device(name, power){
	this.name = name,
	this.power = power,
	this.switchOn = function() {
		console.log(`${this.name}, включение в розетку...`)
	},
	this.switchOff = function() {
		console.log(`${this.name}, отключение от розетки...`)
	}
}

function Kettle(name, power, model) {
	this.name = name,
	this.power = power,
	this.model = model,
	this.boil = function() {
		console.log(`${this.name}, Включено кипячение...`)
	}
}

function Oven(name, power, model) {
	this.name = name,
	this.power = power,
	this.model = model
	this.bake = function() {
		console.log(`${this.name}, Включено запекание...`)
	}
}

Kettle.prototype = new Device()
Oven.prototype = new Device()

const R2D2 = new Kettle("Чайник", "800", "redmond")
const H2D2 = new Oven("Духовка", "1500", "hansa")


R2D2.switchOn()
R2D2.boil()
H2D2.bake()
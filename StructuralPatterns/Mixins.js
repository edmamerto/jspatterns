// Mixins are a great way to mix functions and instances 
// of a class after they have been created. 

class Car {
	constructor(doors, engine, color) {
		this.doors = doors;
		this.engine = engine
		this.color = color;
	}
}

class carFactory {
	createCar(type) {
		switch(type) {
			case 'civic':
				return new Car(4, 'V6', 'grey')
			case 'honda':
				return new Car(2, 'V4', 'red')
		}
	}
}

//we used a mixin to add a function with our Car class
let carMixin = {
	revEngine() {
		console.log(`the ${this.engine} is doing Vroom Vroom`)
	}
}

const carFactory = new carFactory();

const autoManufacturer = (type, model) => {
	switch(type) {
		case 'car':
			return carFactory.createCar(model);
		case 'suv':
			return suvFactory.createSuv(model);
	}
}

Object.assign(Car.prototype, carMixin) // Class.prototype is the oldway of calling class in JS

const honda = autoManufacturer('car', 'honda');

honda.revEngine();
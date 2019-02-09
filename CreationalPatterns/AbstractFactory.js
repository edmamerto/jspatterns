// you abstract the factories and are able to 
// create multiple factories, classes, et cetera. 
// So in our car example, 
// this would be a car company overseeing multiple factories. 

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

class Suv {
	constructor(doors, engine, color) {
		this.doors = doors;
		this.engine = engine
		this.color = color;
	}
}

class suvFactory {
	createSuv(type) {
		switch(type) {
			case 'cx5':
				return new Car(4, 'V6', 'grey')
			case 'santa fe':
				return new Car(2, 'V4', 'red')
		}
	}
}

const carFactory = new carFactory();
const suvFactory = new suvFactory();

const autoManufacturer = (type, model) => {
	switch(type) {
		case 'car':
			return carFactory.createCar(model);
		case 'suv':
			return suvFactory.createSuv(model);
	}
}

const cx5 = autoManufacturer('suv', 'cx5');

console.log(honda)
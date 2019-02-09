// The factory pattern is great when you want 
// to create say a mechanism to create other objects. 
// A good example would be a factory for creating cars. 
// This can be useful when you want 
// a factory to handle most of your classes and 
// then simply use this factory method to create new objects.

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

const factory = new carFactory();
const honda = factory.createCar('honda');

console.log(honda)
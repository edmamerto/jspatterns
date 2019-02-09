// preventing our class from creating 
// more than one instance of the blueprint we've defined.

let isntance = null

class Car {
	constructor(doors, engine, color) {
		if (!instance) {
			this.doors = doors;
			this.engine = engine
			this.color = color;
			instance = this;
		} else {
			return instance;
		}
	}
}

const civic = new Car(4, 'V6', 'grey')
const honda = new Car(2, 'v4', 'red') //will return 4, v6, grey

console.log(honda)
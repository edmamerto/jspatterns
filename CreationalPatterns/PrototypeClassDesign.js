// the prototype, or class pattern, 
// allows us to define a blueprint for a specific type of item 
// and then reuse it by creating a new object from that class.

class Car {
	constructor(doors, engine, color) {
		this.doors = doors;
		this.engine = engine
		this.color = color;
	}
}

const civic = new Car(4, 'V6', 'grey')

console.log(civic)
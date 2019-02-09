// we leverage a class created to 
// initiate a new extended class from it

class Car {
	constructor(doors, engine, color) {
		this.doors = doors;
		this.engine = engine
		this.color = color;
	}
}

const civic = new Car(4, 'V6', 'grey')

console.log(civic)
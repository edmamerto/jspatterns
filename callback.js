// In its simplest terms, 
// a callback function is a function that is called inside of another function.

const calc = () => {
	return 4 * 3
}

const printCalc = (callback) => {
	console.log(callback());
}

printCalc(calc);
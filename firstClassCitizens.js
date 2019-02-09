// It means that when functions can be treated like a variable, 
// meaning they can be passed as arguments to other 
// functions as well or can be assigned as a value 
// to a variable or even return in a function

const calc = () => {
	return 4 * 3
}

let aNumber = calc()

console.log(aNumber)
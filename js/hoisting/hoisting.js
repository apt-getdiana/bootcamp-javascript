//Hoisting
//ECMAScript 2015 - ES6
//Execution context  JavaScript - (creation and execution phass)
//creation phase-> variables and functions must be moved to the beginning of files, it doesnt necessarily happen 
//declarative function
console.log(sum(2, 3));

function sum(number1, number2) {
    return number1 + number2;
}

//expresiones de funciones
//console.log(substraction(2, 3));

let substraction = function(number1, number2) {
    return number1 - number2;
}

console.log(number);

let number = 5;
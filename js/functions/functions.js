
//Syntax -> var function_name = function(parameters) {code}
//Calling function -> function_name(parameters)
var function = function() {
    console.log('Hello');
}
function();

var function_parameters = function(name, lastname) {
    console.log(`Welcome ${name} ${lastname}`);
}
function_parameters('Diana','Garcia');


function division(dividend, divisor) {
    console.log(dividend/divisor);
}
division(2/0);

//Two types of return
//Void doesnt return anything
//Return gives a value with the reserved word return
function multiplication(number1, number2) {
    return number1 * number2;
}
var multiplication_result= multiplication(2, 3);
console.log(multiplication_result);





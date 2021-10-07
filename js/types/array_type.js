//Sintaxis -> var array_name = []
//var array_name = [value1, value2, value3];
var array = [1,2,3,4,5,6,7,8,9];

//Select position
//sintaxis -> array_name[position]
console.log(array[6]);

//size
//Sintaxis -> array_name.length
console.log(array.length);

//last position
console.log(array[array.length - 1]);

//value in last position
//sintaxis -> array_name.push(value);
array.push('11');
console.log('array: ', array);

//value in first position
//sintaxis -> array_name.unshift(value);
array.unshift('11');
console.log('array: ', array);

//erase last position
//Sintaxis -> array_name.pop();
array.pop();
console.log('array: ', array);

//erase first position
//Sintaxis -> array_name.shift();
array.shift();
console.log('array: ', array);

//position of specific value
//Sintaxis -> array_name.indexOf(value);
console.log(array.indexOf('does not exist'));

//copy
//Sintaxis -> var nuevoArray = array_name.slice();
var copy_array = array.slice();
console.log('array copy: ', copy_array);
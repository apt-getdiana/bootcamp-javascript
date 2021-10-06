var first_str = "First String";
var second_str = 'Second String';
var third_str = `This is a template`;


//concatenate
console.log(first_str + " " + second_str);

//advantages of a template
first_str = " This is a message" + "\n" 
+ "in multiple lines";
console.log(first_str)
third_str = `this is a message
in multiple lines`
console.log(first_str)

//concatenate with template
console.log(`${first_str} ${second_str}$`)


var var1="8"
var var2="10"

//this will concatenate
console.log(var1 + var2)
//this will sum
console.log (eval(`${var1} + ${var2}`))

var var1="8"
var var2="whatever"

//this will concatenate
console.log(var1 + var2)
//this will yield an error
console.log (eval(`${var1} + ${var2}`))

//cast as number
console.log(Number(var1))
//cast as String
console.log(String(8))

//find number of characters
console.log(first_str.length)
/* find character in given position
Note: Position starts in zero */
console.log(first_str.charAt(12))



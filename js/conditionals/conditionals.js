/*
* Conditional
*/
var number = 5;

//if
//its going to be evaluated always
//Syntax -> if(condition) { code }
if(number)
    console.log('Number is different to 0 and -0');

//else if
//new condition evaluated as long prev condition not satisfied
//Syntax -> if(condition) {code} else if(condition2) {code2} ... else if(conditionN) {codeN}
if(number < 5)
    console.log('Number smaller than 5');

else if(number > 5)
    console.log('Number greater than 5');

//else
//evaluated if prev conditions not satisfied
//Syntax -> if(condition) {code} else {code}
if(number < 5)
    console.log(' Number smaller than 5');

else
    console.log('Number bigger than 5');

//Combinations if, else if, else
if(number < 5)
    console.log('Number smaller than 5');

else if(number > 5)
    console.log('Number bigger than 5');

if(number < 5) 
    console.log('Number smaller than 5');

else
    console.log('Number equal to 5');

//To only print one line
if(number) {
    if(!number)
        console.log('not this one');

    if(number) {
        if(!number)
            console.log('not this one');

        else {
            if(number) 
                console.log('print this one');

            else
                console.log('not this one');
        }
    }
} 
//scope, context
var variable = 5;
//console.log(variable);

//According the block containing it -- local
for(let count = 0; count < 10; count++) {
    console.log(count);
}

console.log(count);

//According to the function containing it - Global
for(var index = 0; index < 10; index++) {
    console.log(index);
}

function second_example() {
    var index = 0;
    console.log(index);
    function second_example() {
        var i = 1;
        console.log(index);
    }

    second_example();
}

second_example();

console.log(index);
//Recursiv Function
//invoques itself recursivly
let recursive_function = function(number) {
    if(number === 0) {
        return;
    }

    //console.log(number);
    return recursive_function(number - 1);
}

//recursive_function(5);

var information = {
    profile: {
        name: "Diana",
        lastname: "Garcia",
        age: 24
    },
    studies: {
        middle_school: {
            school: "Chester Palmer School"
        },
        high_school: {
            school: "Liceo Nueva Generacion"
        }
    }
};

//Ternary Operator


function iterate_internally(object) {
    if(typeof object !== 'object') {
        return;
    }

    for(const property in object) {
        /*
        if(typeof object[property] !== 'object') {
            console.log(`  ${property}: ${object[property]}`);
        } else {
            console.log(`${property}`);
        }
        */
        console.log((typeof object[property] !== 'object')?`  ${property}: ${object[property]}`:`${property}`);
        iterate_internally(object[property]);
    }
}

//iterate_internally(informacion);

function iteration(object){
    var object_keys = Object.keys(object);

    for (let keys_iterator in object_keys){
        console.log(object_keys[keys_iterator]);
        if (typeof object[keys_iterator] === 'object'){
            iteration(object[keys_iterator]);
        }
        else{
            return
        }
    }
}




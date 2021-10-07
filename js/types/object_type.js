//Object
// Collection of properties
//First way to define
var person = new Object();
person.name = 'Diana';
person.lastname = 'Garcia';
person.age = 24;

//Second way to define
var person2 = {
    name: 'Diana',
    lastname: 'Garcia',
    age: 24
};

//First way to extract property
//object['property']
console.log(person['name']);
console.log(person2['name']);

//Second way
//object.property
console.log(person.age);
console.log(person.age);

//inexistent properites
console.log(person['phone']);
console.log(person.email);

//Append properties with second form Object['new_property']
person2['phone'] = 3223073483;

//Append properties with second form 
// object['new_property']
//or object.new_property
person['email'] = 'dianags1811@gmail.com';
person.phone = 3223073483;

console.log(person['phone']);
console.log(person.email, person.phone);

//All data types can be used in objetc
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

console.log(information.studies.high_school.school);
console.log(information['studies']['high_school']['school']);

//Delete property of an object
//delete object.property
console.log(information.profile.age);
delete information.profile['age'];
console.log(information['profile']['age']);

//Comparing objects
//Objects are never truly equal even if properties are the same
var vehicle = {
    model: 2014
};

var vehicle2 = {
    model: 2014
};

console.log(vehicle == vehicle);
console.log(vehicle === vehicle2);

//Only way to compare objects it's if they have the same reference
var truck = {
    brand: 'BMW'
};

var truck2 = truck;

console.log(truck == truck2);
console.log(truck === truck2);

//Using console.log 
//console.log(variable+ variable2);
//console.log(variable, variable2);
/*console.log("object: "+ person);
console.log("object: ", person);
console.log("number: "+ 8);
console.log("number: ", 8);
console.log("vector: "+ [1,2,3,4,5]);
console.log("vector: ", [1,2,3,4,5]);*/
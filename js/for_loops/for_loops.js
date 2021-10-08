/*
 Bucle
 For
*/
//For
//Syntax -> for(iterator; condition; end) {code}
//iterator -> declaration of variable that will iterate
//condition ->   <code> excuted only if condition satisfied
//end -> final expresion evaluated once iteration executed
//count++ -> count = count + 1;
//count+2 -> count = count + 2;
//count-4 -> count = count - 4;
for(var count = 1; count <= 3; count++) {
    console.log(count);
}

var cities = ['Bucaramanga', 'Cali', 'Bogota', 'Valledupar', 'Barranquilla'];

//print even positions like
//'position <array_position> it's even and it's position is <array_position_value>'
//and odd positions like
//'position <array_position> it's odd and it's position is <array_position_value>'
//module -> %:  3%2=1; 2%2=0 
for(var temporal_position_cities = 0; temporal_position_cities < ciudades.length; temporal_position_cities++){
    if(temporal_position_cities%2==0){
        console.log(`position ${temporal_position_cities} it's even and it's position is ${ciudades[temporal_position_cities]}`)
    }
    else if (temporal_position_cities%2==1){
        console.log(`position ${temporal_position_cities} it's odd and it's position is ${ciudades[temporal_position_cities]}`)
    }
}

/*
Matrix
*/
var two_dim3x3 = [[0,1,2], [3,4,5], [6,7,8]];
/*
sum diagonals
on console:
-> sum of diagonals is <sum_diagonals>
*/

var sum = 0;
for(var first_iterator = 0; first_iterator<=two_dim3x3 .length-1; first_iterator++){
    var temp_matrix = two_dim3x3 [first_iterator];
    for(var second_iterator = 0; second_iterator<=temp_matrix.length-1; second_iterator++){
        if(first_iterator==second_iterator){
            sum= sum+two_dim3x3 [first_iterator][second_iterator];
        }
    }
    for(var third_iterator = temp_matrix.length-1; third_iterator>=0; third_iterator--){
        if(first_iterator+third_iterator==two_dim3x3 .length-1){
            sum= sum+two_dim3x3 [first_iterator][third_iterator];
        } 
      }
} 
 console.log(sum);
 

 //Quick solution
 var sum = 0;
for(var iterator = 0; iterator <= two_dim3x3.length-1; iterator++) {
    sum += two_dim3x3[iterator][iterator];
    sum += two_dim3x3[iterator][(two_dim3x3.length-1) - iterator];
}
console.log(sum);
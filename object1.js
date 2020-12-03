var rahim = {
                   fullName : 'Rahim Uddin',
                   age  : 21,
                   address  : 'Dhaka',
                   job  : 'web developer in England'
}

// console.log(rahim.job);
// console.log(rahim['job']);
// console.log(rahim[job]) you have to use cotation in square bracket
rahim.vehical = "Bike";  //when , you like to add new propertise in object simply use object.propertise name = asign value

rahim . firstFunction = function(){
    console.log('Hello World');  //you can also add function in object .
}
//console.log(rahim.firstFunction()); //call this way ....name()
for (item in rahim){
    console.log(rahim[item]);  //you can access this value using item keyword and also using bracket notation
}
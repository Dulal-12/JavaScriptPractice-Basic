function check(){
    var num = 1;
    if( num > 0) {let c = 0;} //let and const work in block scope 
    //console.log ( c ); //you don't access outside of block and you should get error :)

}
check();

//when you use var keyword . var keyword (1.change value , 2. use var keyword again and again )
// when you use let keyword . let keyword (1.  change value , 2. not use let keyword again)
//when you use const keyword . const keyword(1. don't change value 2. not use const keyword again)
var name = 'dulal';
var name = "ammu";
// console.log(name)
let name1= 'dulal';
// let name1 = "ammu"; //don;t declare let again
// console.log(name1);//you should get error
const personName = "Dulal";
        // personName = "Ammu";//don't change varaiable value when useing const keyword
console.log(personName);
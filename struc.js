var detail = [ 'Dulal' , 21 , 'CityUniversity' ];
var name = detail[0];
var age = detail[1];
var university = detail[2];
// console.log(name , age , university);
const [name1 , age1 , university1] = detail;

// console.log(name1 , age1 , university1);
const myDetail = {
                              name  : 'Mohammad Dulal Miah',
                              age  : 21 ,
                              university  : 'City University'
}

const { name : nameOfmy} = myDetail; //destructure but not using same name-p
console.log(nameOfmy);

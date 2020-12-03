const callMyName = (name , callback) =>{
    var myAge = 21 ;
    callback(myAge);
    console.log(`It is interesting ? Yes it is Mr.`+ name);
}

const hello = (age) =>{
    console.log(`My age is ${age} years old `);
}



//you can pass function as a argument or return a function
callMyName('Dulal Miah' , hello);
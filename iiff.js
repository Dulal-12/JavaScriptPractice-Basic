(function demo(){
    var msg = `Hello world`;
    console.log(msg);
}) ();
// demo(); you should get error
//console.log(msg);

// when you like to create private variable or function --> you can use let and const keyword and use {}
{
    let a = 5 ; 
    let b = 11 ; 
    const pi = 5+6;
    console.log(a+b+pi);
} 
// console.log(pi); //error because of this is private variable 

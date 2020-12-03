function fibo(n){
    let fibonacci = [ 0 , 1 ];
    for(let i = 2 ; i<=n ; i++){
      
         let value = fibonacci[0]  + fibonacci[1];
         fibonacci.push(value);
         fibonacci.shift();

    }
    return fibonacci[0];
}

const result = fibo(8);
console.log(result);

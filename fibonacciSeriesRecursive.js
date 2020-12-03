function fibo(n){
    if( n === 0){
        return [0];
    }
    else if( n === 1){
        return [0,1];
    }
    else{
             let fibonacci = fibo(n-1);
             let nextValue = fibonacci[n-1] + fibonacci[n-2];
             fibonacci.push(nextValue) ;
             return fibonacci;
    }
}

const result = fibo(8);
console.log(result);
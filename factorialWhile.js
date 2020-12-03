function factorial(num){
    let i = 1;
    let factorial = 1;
    if(num === 1)
         return 1;

    else
          while(i<=num){
               factorial *= i;
               i++;
          }

        return factorial;
               
}

const result = factorial(4);
console.log(result);
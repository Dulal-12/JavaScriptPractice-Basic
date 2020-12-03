function factoralWhile(num){
    let i = 1;
    let factoralWhile = 1;
    if(num === 1 || num === 0)
         return 1;

    else
          while(i<=num){
               factoralWhile *= i;
               i++;
          }

        return factoralWhile;
               
}

const result = factoralWhile(0);
console.log(result);
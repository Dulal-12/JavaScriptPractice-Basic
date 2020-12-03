function primeNumber(num) {

    let signValue = 0 ;
    if (num < 2){
        return 'Not Prime';
    }
   else {
         for(let i = 2 ; i<num ; i++)     {
             if(num%i === 0){
                 signValue++;
                 break;
             }
         }
         if(signValue > 0){
            return 'Not Prime';
        }
        else{
            return 'Prime';
        }
   }

  

}

const result = primeNumber(11);
console.log(result);
function fact(num){
    if (num === 0 || num ===1){
        return 1;
    }
    else{
        return num*fact(num-1);
    }
}

const result = fact(10);
console.log(result);                            //4*3*2*1    4*3*2*1
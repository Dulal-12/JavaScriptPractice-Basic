function leepYear(year){

    if((year%4 === 0 && year%100!==0) || (year%400 === 0) )
            return 'leep Year';
    else
            return 'Not leep Year';
}

const finalResult =  leepYear(1700);
console.log(finalResult);
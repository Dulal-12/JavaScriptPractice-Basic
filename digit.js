function count(n){
    var number =  n.toString().split('');
    var digit = 0;
    for(var i = 0; i < number.length;i++){
    if(number[i]!=="-"){
        var value =parseInt( number[i]);
        if(typeof (value) === 'number'){
            digit+=1;
        }

    }
    }
    return digit;
}
console.log(count(-123))
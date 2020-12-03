var obj = {
                Bangladesh  :'Dhaka',
                India : 'Delhi',
                Nepal  : 'Kathmandu',
                Afganistan  :'Kabul',
                Thailand : ' Bangkok',
};

// 

// console.log(Object.values(obj));
// console.log(Object.keys(obj));
for(keys in obj){
    // console.log("country : ",keys);
    // console.log(obj[keys]); //using keys get values
}

var objValues = Object.values(obj) ; 
console.log(objValues) ; //values in array not creating new array or push method6t6t
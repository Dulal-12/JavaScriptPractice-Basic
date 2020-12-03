var arr1 = [1,2,3,4];
var arr2 = [5,6,7,8];
// console.log([...arr1 , ...arr2]);
function calculate ( a,b,c,d){
    console.log('sum  : ',(a+b+c+d));
}
calculate(...[1,2,3,4]);
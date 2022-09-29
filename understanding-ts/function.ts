// function add(n1: number,n2:number){
//     return n1+n2;
    
// }

// function printResult(num: number): void{   //In other languages there is a concept of void but in js there is no void.
//     console.log("Result is: "+num)
// }
// printResult(add(1,2));

// //Ex: 2

// let combineFn: Function;

// combineFn= add;
// // combineFn=5;   //this one gives error as it is of function type
// console.log(combineFn(3,2))

//Ex: 3  //call back
function addAndHandle(n1: number,n2: number, cb: (num: number) => void){
   const res=n1+n2;
   cb(res);
}

console.log(addAndHandle(2,3,(res)=>{
    //console.log(res)
    return res;
}))

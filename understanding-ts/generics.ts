//====================== GENERICS ========================/
//<T> => you can define types a/c to your choice
// function identityOne(arg: any): any {   
//   return "str";
// }


// console.log(identityOne(2));  //argument of number and func returns string

// function identityTwo<Type>(arg: Type):Type{
//   return arg;
// }

// console.log(identityTwo(4))

// interface Bottle{
//   brand: string
//   type: number
// } 

// function identityFour(obj:Bottle){
//  console.log("yes")
// }
// console.log(identityFour({}))

// function getSearchProducts<T>(products: T[]):T {
//   const myIndex=3;
//   return products[myIndex];        //can't retutn 3 or any particular value
// }

// const getMoreSearchProducts=<T>(products: T[]):T=>{ //Arrow Function
//   return products[3];
// }

//==> <T,> to represents this is generics syntax not the JSX syntax.


//2) extends
interface Database{
  connection: string,
  password: string
}

function anotherFunction<T,U extends Database>(valueOne: T,valueTwo: U): object{
   return{
     valueOne,
     valueTwo
   }
}
console.log(anotherFunction("hi",{connection:'connect', password: '1234'}))
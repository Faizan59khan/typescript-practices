//01) variables
// let greetings: string='faizan';

// let myNum=6;
// greetings.toLowerCase()
// console.log(greetings)

// //number (float and int both treated as number)
// let userId: number=3332222222.3;
// userId.toFixed(2);

//function
// function calculator(value1: number, value2:number, opr: string):number {
//   if(opr === '+'){
//     return value1 + value2;
//   } 
//   return 1;
// }

// function consoleError(msg: string): void{
//    console.log(msg)
// }

// function habdleError(errMsg:string): never{
//   throw new Error(errMsg);
// }

// //null or undedined check
// function doSomething(x?:number | null){
//   console.log(x!.toFixed());
// }

// console.log(calculator(1,4,"+"))

// let loginUser=(name: string,email: string, isPaid: Boolean=false):boolean =>{
//  return true;
// }

// //In Map (add type check in return of map, leave the type check in array val no issue)
// const heroes=['thor','spiderman','ironman'];
// heroes.map((val): string =>{
//   return "3"
// })

//type and keywords (read only , ? , &(amperson))
// type User ={
//   readonly _id: string
//   name: string
//   email: string
//   isActive: boolean
//   creditCard?: number              //? make this optional 
// }

// type carNumber={
//   cardNumber: number
// }

// type cardDate={
//   cardDate: number
// }
// type cardDetails= carNumber & cardDate & {           //not the good way
//   cvv: number
// }

// let myUser: User = {
//   _id: '1234',
//   name: 'faizan',
//   email: 'f@gmail.com',
//   isActive: true
// }

// myUser.email="ff@gmail.com";
// myUser._id= "11"; //error readonly

const MLModels: number[][]=[ //array of arrays
  [255,255,255],
  [255,255,255],
  [255,255,255],
]


 
 

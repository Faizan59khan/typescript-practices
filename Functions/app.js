// function sumVariadicSafe(...numbers: number[]): number {
//   return numbers.reduce((total, n) => total + n, 0)
//  }
//  console.log(sumVariadicSafe(1, 2, 3)) 
//  function add(x: number, y: number): number {//Named function
//   return x+y;
// }
// var myAdd1 = function(x: number, y: number): number { //Anonymous function
//       return x+y; 
//     };
// var myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number { //Anonymous function with explict type
//                       return x+y; 
//                     };
// var myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { //type names dont matter
//                               return x+y; 
//                             };
// var myAdd4 = (a : number, b : number) => a + b;//Lambda functions
// //output will be: var myAdd4 = function(a : number, b : number) {return a + b};
//Optional parameter
function buildName(firsName, lastName) {
    if (lastName) {
        return "".concat(firsName, " ").concat(lastName);
    }
    return firsName;
}
console.log(buildName("faizan", "khan"));

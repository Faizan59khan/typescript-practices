// function add(n1 : number,n2 : number) : number{
//   return n1 + n2;
// }

// // const result= add(5,'2');

// const result = add(5,2);
// console.log(result);

//Ex: 2
// function combine(n1: number | string, n2:  number | string){  //union types
//   if(typeof n1 === "number" && typeof n2 === "number"){
//     return n1+n2;
//   }
//   else{
//     return n1.toString() + n2.toString();
//   }
  
// }

// console.log(combine(2,5));
// console.log(combine("Max","Anna"))

//By using literal types:
type Combinable= number | string;        //type alias : make your custom types
function combine(
  n1: Combinable,
  n2: number | string,
  resultConversiuon: "as_number" | "as_text"           //resultConversiuon: string 
) {
  //literal types
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversiuon === "as_number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

console.log(combine('2','5',"as_number"));
console.log(combine("Max","Anna","as_text"))
// function add(n1 : number,n2 : number) : number{
//   return n1 + n2;
// }
function combine(n1, n2, resultConversiuon //resultConversiuon: string 
) {
    //literal types
    var result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        resultConversiuon === "as_number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
console.log(combine('2', '5', "as_number"));
console.log(combine("Max", "Anna", "as_text"));

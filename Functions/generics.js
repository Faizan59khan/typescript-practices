//Ex: 1:
// const last = <T>(arr: T[] ) : T =>{       
//   return arr[arr.length-1];
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var getInfo = function (obj, name) {
    return __assign(__assign({}, obj), { name: name });
};
console.log(getInfo({ id: "1", position: 3, data: 1200 }, "Faizan"));
//Example: 
// interface CompareSomething<T> {             //<T> generic type
//   compareNumbers(value: T): boolean
// }
// class Worker1 implements CompareSomething<Worker1>{
//    constructor(public name: string , public age: number){
//       this.name=name;
//       this.age=age;
//    }
//   compareNumbers(value: Worker1): boolean {
//     return this.age > value.age;                       //this is for current class 
//   }
// }
// const w1: Worker1=new Worker1("faizan",20);
// const w2: Worker1=new Worker1("Salman",21);
// console.log(w1.compareNumbers(w2));

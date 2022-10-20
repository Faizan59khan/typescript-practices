//Ex: 1:
// const last = <T>(arr: T[] ) : T =>{       
//   return arr[arr.length-1];
// }

// const l=last<Number | String>([1,2,"3"])
// console.log(l)


//Example : 2 (overwrite inference , default value)
// const userInfo=<X,Y=string> (x: X, y:Y)=>{      //X= number (default value type)
//    return [x,y];
// }
// console.log(userInfo<number, string>(5,"6"))

//Example : 3  
// const makeFullName=<T extends {firstName: string, lastName: string}> (obj: T) =>{
//   return {
//     ...obj,
//     fullName: obj.firstName + " "+ obj.lastName
//   }
// }
// console.log(makeFullName({firstName: "faizan", lastName:"khan", age: 22}))

//Ex 4: Interfaces
interface Tab<T>{
  id: string,
  position: number,
  data: T
}

type NumberTab=Tab<number>
type StringTab=Tab<string>

const getInfo = (obj: NumberTab, name: string)=>{
  return {
    ...obj,
    name: name
  }
}

console.log(getInfo({id: "1",position: 3, data: 1200},"Faizan"))


  
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
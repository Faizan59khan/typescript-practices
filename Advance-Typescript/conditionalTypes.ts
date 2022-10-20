//syntax:
// 1) type sometype =T extends U ? X : Y

type SomeType=number;
type MyConditionalType=SomeType extends string ? string : null;

function someFunction<T>(value: T){
   const someOtherFunction=(someArg: T extends boolean ? 'TYPE A' : 'TYPE B')=>{};
   return someOtherFunction;
}

const result = someFunction("");

// 2) Distributive Property of Conditional Types:
// Conditional types in which the checked type is a naked type parameter are called distributive conditional types.

// type A<T> = string extends T ? "yes" : "no" This is not a distributive conditional type. The checked type is string, which is not a generic type parameter.
// type B<T> = {x: T} extends {x: number} ? "yes" : "no" This is not a distributive conditional type. The checked type is {x: T}, which has the type parameter T in it, but is not a naked type parameter.
// type C<T> = T extends string ? "yes" : "no" This is a distributive conditional type; the checked type is T, which is a naked generic type parameter.

type StringOrNot<T> = T extends string ? string : never;
type AUnion = string | boolean | never;


//3) Exclude: It takes union types and remove someType1 from someType2
//Syntax:
//type Exclude<T, U>=T extends U ? never : T ; 

type ResultType = Exclude<'a' | 'b' | 'c' , 'a' | 'b'>

/* 
'a' extends 'a' | 'b' ? never : a;    => never
'b' extends 'a' | 'b' ? never : b;    => never
'c' extends 'a' | 'b' ? never : c;    => c
*/


//4) Compairing Functions and then decide the type.
type MyType<T> = T extends string | number ? T : never;
type MyResult = MyType<string | number | boolean>;


// 5) Infer Types: whole type or the some part of type
//syntax: type someType= T extends infer U ? U : Y
type InferSomething<T> = T extends infer U ? U : any;
type Infered = InferSomething<"I am a String">

type InferSomething2<T> = T extends {a: infer A, b: infer B} ? A : any;
type Infered2=InferSomething2<{a: "Hello", b: 1}>  //==> Hello
type Infered3=InferSomething2<{a: "Hello"}>        //==>any  


type InferSomething4<T> = T extends {a: infer A, b: infer B} ? A & B : any;
type Infered4= InferSomething4<{a:{somAprop: 1}, b: {someBProp: "B"}}>

//6) Return Type: Infer the part of function value like return type
type MyFuncReturnValue = ReturnType<() => true>;
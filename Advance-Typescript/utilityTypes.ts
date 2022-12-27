//1) Partial types:
//partial makes the property optional.
//name ?: "faizan"

// interface Starship{
//   name: string,
//   enableHyperJump: boolean
// }

// const updateStarship=(id: number, starship: Partial<Starship>)=>{

// }

// updateStarship(2,{
//   name: 'faizan',
// })

//2) Record (used in maps or objects)
//syntax Record<keys,type>
// interface User {
//   id: number;
//   firstname: string;
//   lastname: string;
//   age?: number;
// }
// type Roles= 'Scientist' | 'SE'

// const users: Record<Roles, User>={
//   'SE': { id: 1, firstname: 'Chris', lastname: 'Bongers' },
//   'Scientist': { id: 2, firstname: 'Yaatree', lastname: 'Bongers', age: 2 },
// }

// console.log(users)


//3) Pick
//It is used to match the properties by choice just defined the keys.
//Syntax: Pick<Type, Keys>
// interface Credentials{
//   name: string,
//   email: string,
//   password: string
// }


// const create=({name,email,password}: Pick<Credentials, 'name' | 'email' | 'password'>)=>{
//   console.log("Create")
// }
// const login=({email,password}: Pick<Credentials, 'email' | 'password'>)=>{
//   console.log("login")
// }

// const resetPassword= ({email}: Pick<Credentials, 'email'>)=>{
//   console.log("reset password")
// }


// login({email: 'f@gmail.com',password:'1234556'})

//4)Exclude (remove something from type1)
//Syntax : Exclude<all union types , removable union types>
// type availableDrink= 'tea' | 'coffee' | 'lemonade' | 'coke' | 'cold-coffee';
// type drinksJamesNotLike = 'coffee';

// let jamesDrink : Exclude<availableDrink,drinksJamesNotLike>;
// jamesDrink='tea';

//5) Extract opposite of exclude
// let johnDrinks: Extract<availableDrink,drinksJamesNotLike>   //Intersection
// johnDrinks='coffee'


//6) OMIT(type,keys)
// type person={
//   firstName: string,
//   lastName: string,
//   hobbies: string[]
// }

// type SomePerson=Omit<person, 'lastName'>

// const data: SomePerson={
//   firstName: 'fazian',
//   hobbies: ['cricket', 'dance', 'coding']
// }

//7) ReadOnly(Type)
// type readOnlyPerson=Readonly<person>
// let person2: readOnlyPerson = {firstName: 'Shahid', lastName: 'Afridi', hobbies: ['painting']};

// person2.name="Salim";  //readonly


//8) Required(Type)
type Customer={
  name: string,
}

type reqCustomer=Required<Customer>


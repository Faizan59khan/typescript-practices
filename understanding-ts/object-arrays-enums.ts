//Ex :1
// const person: { //this is key type pair
//   name: string;
//   age: number;
//   hobbies: string[];
//   // role: [number, string];    
// } = {
//   name: "faizan",
//   age: 22,
//   hobbies: ["Sports","Cooking"],
//   // role: [2,"scientist"],                       //ts treat as a tuple (union of number and string)
// }

// let favouriteActivities: string[];
// favouriteActivities= ["Sports"]

// for(let hobby of person.hobbies){       
//   console.log(hobby.toUpperCase())  //no error ts konws it is of string type.  
//   // console.log(hobby.map())  //error (can not apply map on string)
// }

//Ex: 2
enum Role {ADMIN = 2,AUTHOR=1,READONLY="author"};

const person = {
  role: Role.ADMIN
}

if(person.role === Role.ADMIN){
  console.log("Admin")
}

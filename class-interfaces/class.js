//Ex :1  For initial values we have to create a constructor.
// class Developer{
//   name?: string;
//   position?: string;
//   constructor(name: string, position: string){
//     this.name= name,
//     this.position=position
//   }
//   develop(): void{
//     console.log(`${this.name} can develop sofwares`)
//   }
// }
// const developer=new Developer("faizan","SE");
// console.log(developer.name)
// console.log(developer.position)      
// developer.develop();  
//Ex: 2 static keyword (we can use static method and variables without creating instance of class)
// class Developer{
//   name?: string;
//   position?: string;
//   constructor(name: string, position: string){
//     this.name= name,
//     this.position=position
//   }
//   static develop(app:{name:string,type:string}){
//     return {name: app.name, type: app.type}
//   }
// }
// console.log(Developer.develop({name: "Whatsapp",type: "mobile"}));
//Ex: 3 Use Classes For type checking
// class App{
//   name:string;
//   type:string;
//   constructor(name: string,type:string){
//     this.name=name;
//     this.type=type;
//   }
// }
// class Developer{
//   name?: string;
//   position?: string;
//   constructor(name: string, position: string){
//     this.name= name,
//     this.position=position
//   }
//   static develop(app: App){                      //Here we give class as type check
//     return {name: app.name, type: app.type}
//   }
// }
// const app=new App("whatsapp","mobile")
// console.log(Developer.develop(app));            //output the same content as the above example 
//Ex: 4 when to use Interface: (to check the type of arguments) 
// interface App {
//   name: string
//   type: string
// }
// class Developer {
//   static develop(app: App) {
//     return { name: app.name, type: app.type }; // output the same
//   }
// }
// console.log(Developer.develop({name: "whatsapp" ,type:"mobile" }))
//============= Modifiers ================
// class User{
//   email: string          //authomatically marked as public
//   name: string
//   private readonly cnic: number      //# or private both user fro private
//   #iban: number
//   constructor(email: string, name: string){
//     this.email=email;
//     this.name=name;
//   }
// }
// const Faizan=new User('f@gmail.com','Faizan');
// Faizan.iban
//professional way of above 
var User = /** @class */ (function () {
    function User(email, name, cnic, num) {
        if (num === void 0) { num = 2; }
        this.email = email;
        this.name = name;
        this.cnic = cnic;
        this.num = num;
        this.city = 'jaipur';
        this._courseCount = 1;
    }
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Course count should be more than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var obj = new User("e", "e", '2');
console.log(obj.courseCount);
obj.courseCount = -2;
console.log(obj.courseCount);
//For access private variables we used the way of getter setter (not changing anything directly)  

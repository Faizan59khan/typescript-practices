
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

//============= Access Modifiers ================
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
//1)
// class User{
//   readonly city: string= 'jaipur'
//   private  _courseCount=1;
//   constructor(public email: string, public name: string,private cnic: string,readonly num: number=2){
        
//   }

//   private deleteToken(){
//    console.log("token deleted")
//   }

//   get courseCount():number{
//     return this._courseCount;
//   }
//   set courseCount(courseNum){
//     if(courseNum <=1){
//        throw new Error("Course count should be more than 1");
//     }
//     this._courseCount=courseNum;
//   }
// }
// const obj=new User("e","e",'2')
//  console.log(obj.courseCount)
// obj.courseCount=-2
// console.log(obj.courseCount)
 //Private is only accessible with in class
 //For access private variables we used the way of getter setter (not changing anything directly)  
 //setter has no return type.


//2)
// class User{
//     readonly city: string= 'jaipur'
//     protected _courseCount=1;
//     constructor(public email: string, public name: string,private cnic: string,readonly num: number=2){
          
//     }
  
//     private deleteToken(){
//      console.log("token deleted")
//     }
  
//     get courseCount():number{
//       return this._courseCount;
//     }
//     set courseCount(courseNum){
//       if(courseNum <=1){
//          throw new Error("Course count should be more than 1");
//       }
//       this._courseCount=courseNum;
//     }
//   }
// class SubUser extends User{
//   isFamily: boolean = true;
//   changeCourseCount(){
//     this._courseCount=4;
//   }
// }

//Protected variable can be used in same class and in the class which extends that class.


//3)
//Interface only have definitions of variables and functions .The class which implements interface have to define the body of functions. 
// interface TakePhoto{
//   cameraMode: string
//   filter: string
//   burst: number
// }
// interface Story{
//   short: string
// }

// class Instagram implements TakePhoto,Story{
//   constructor(public cameraMode: string,
//     public filter: string, public burst: number, public short: string){
//   }
// }

//4) Abstract Classes: It can have method's body but we can't create object of abstract.
 // It gives better structure 

// abstract class TakePhoto{
//   cameraMode: string
//   filter: string
//   abstract getSepia(): void       //abstract method have to implement body in class which implements this
//   getReel(): number {
//     //some calculations
//     return 6;
//   }
// }

// class Youtube extends TakePhoto{
//   constructor(public cameraMode: string, public filter: string){   //super is necessary 
//     super();
//   }
//   getSepia(): void {
//     console.log("Get Sepia")
//   }
//   getReel(): number {
//     return 9;
//   }
// }


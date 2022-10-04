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
var App = /** @class */ (function () {
    function App(name, type) {
        this.name = name;
        this.type = type;
    }
    return App;
}());
var Developer = /** @class */ (function () {
    function Developer(name, position) {
        this.name = name,
            this.position = position;
    }
    Developer.develop = function (app) {
        return { name: app.name, type: app.type };
    };
    return Developer;
}());
var app = new App("whatsapp", "mobile");
console.log(Developer.develop(app)); //output the same content as the above example 

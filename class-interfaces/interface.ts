interface IDeveloper{
  name: string;
  position: string;

  develop: () => void
}

class Programmer implements IDeveloper{
   name: string;
   position: string;

   constructor(name: string,position: string){
    this.name=name;
    this.position=position;
   }
   develop(): void {
    console.log(`${this.name} can develop sofwares`)
   };
}

const programmer=new Programmer("salman","SE");

console.log(programmer.position);
programmer.develop();
abstract class Animal {
  private name: string;

  constructor(theName: string) {
    this.name = theName
  }

  walk(distance: number){
    console.log(`hi, my name is ${this.name} and i'm walking ${distance} meter`);
    
  }
}

class Fish extends Animal {
  constructor(theName: string) {
    super(theName)
  }
  walk(distance: number){
    console.log('fish cant walk');
  }
  
}

let myAnimal = new Fish("Dave")
myAnimal.walk(19)
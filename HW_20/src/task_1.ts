class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  sound() {
    console.log('The animal makes a sound');
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, species: string, breed: string) {
    super(name, species);
    this.breed = breed;
  }
  sound() {
    console.log('The Dog barks');
  }
}

const dog = new Dog('Fido', 'Dog', 'Golden Retriever');
dog.sound();

const animal = new Animal('Animal', 'Animal');
animal.sound();

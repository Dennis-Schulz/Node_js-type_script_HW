abstract class Animal {
abstract makeSound(): void 
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark');
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow');
  }
}

const animal: Animal[] = [new Dog(), new Cat()];
animal.forEach((animal) => animal.makeSound());

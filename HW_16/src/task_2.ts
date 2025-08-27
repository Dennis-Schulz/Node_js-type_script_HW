interface Person {
  name: string;
  age: number;
  city: string;
}

function printPersonInfo(person: Person): void {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`City: ${person.city}`);
}

const person: Person = {
  name: 'John',
  age: 30,
  city: 'New York',
};

printPersonInfo(person);

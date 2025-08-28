type Engine = {
  type: string;
  horsePower: number;
};

type Car = {
  make: string;
  model: string;
  engine: Engine;
  year?: number;
};

const car: Car = {
  make: 'Жигули',
  model: '21010',
  engine: {
    type: 'Бензин',
    horsePower: 200,
  },
  year: 1999,
};

function showCar(car: Car): void {
  for (const key in car) {
    const value = car[key as keyof Car];
    if (typeof value === 'object') {
      for (const key in value) {
        console.log(`${key}: ${value[key as keyof Engine]}`);
      }
    } else {
      console.log(`${key}: ${value}`);
    }
  }
}

showCar(car);

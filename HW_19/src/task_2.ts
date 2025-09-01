interface StringToBooleanFunction {
  (value: string): boolean;
}

const stringToBoolean: StringToBooleanFunction = (value: string): boolean =>
  value === '' ? false : true;

console.log(stringToBoolean(''));
console.log(stringToBoolean('test'));

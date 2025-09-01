const getLastElement = <T>(arr: T[]): T => arr[arr.length - 1];

console.log(getLastElement([1, 2, 3, 4, 5]));
console.log(getLastElement(['a', 'b', 'c', 'd', 'e']));

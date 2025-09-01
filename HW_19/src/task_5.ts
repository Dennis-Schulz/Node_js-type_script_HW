const makeTriple = <T>(value1: T, value2: T, value3: T): T[] => [value1, value2, value3];

console.log(makeTriple(1, 2, 3));
console.log(makeTriple('a', 'b', 'c'));
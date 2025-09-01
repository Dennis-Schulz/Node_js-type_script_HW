type CompareStrings = {
  (str1: string, str2: string): boolean;
};


const compareStrings: CompareStrings = (str1: string, str2: string): boolean => str1 === str2;

console.log(compareStrings('test', 'test'));
console.log(compareStrings('test', 'test2'));
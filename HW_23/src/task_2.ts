const string: string[] = ['banane', 'apple', 'orange', 'kiwi'];

function processString(str: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str.toUpperCase());
    }, 1000);
  });
}

async function processArray(arr: string[]): Promise<string[]> {
  const processedStrings = await Promise.all(arr.map(processString));
  return processedStrings;
}

async function main() {
  try {
    const processedStrings = await processArray(string);
    console.log(processedStrings);
  } catch (error) {
    console.error(error);
  }
}

main();

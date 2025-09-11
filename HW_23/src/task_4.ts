const array: number[] = [1, 2, 3, 4, 5];

function addPromise(seconds: number): Promise<string> {
  return new Promise((resolve, _reject) => {
    const ms: number = seconds * 1000;
    setTimeout(() => {
      resolve(`Промис выполнен через ${ms} мс`);
    }, ms);
  });
}

async function runPromises() {
  try {
    const result = await Promise.all(array.map(addPromise));
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

runPromises();

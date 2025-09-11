import fs from 'fs';
function Sum(a: number, b: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0)
        return reject(new Error('Negative values are not allowed'));
      resolve(a + b);
    }, 2000);
  });
}

function Multiply(a: number, sum: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0) return reject(new Error('Negative values are not allowed'));
      resolve(a * sum);
    }, 3000);
  });
}

function createFile(path: string, content: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      if (err) {
        return reject(err);
      }
      resolve('File is created successfully.');
    });
  });
}

async function myFunction(a: number, b: number, c: number): Promise<void> {
  try {
    const sum = await Sum(a, b);
    console.log(`${a} + ${b} = ${sum}`);
    const multiply = await Multiply(c, sum);
    console.log(`${c} * ${sum} = ${multiply}`);
    await createFile('file.txt', multiply.toString());
    console.log(`Файл успешно создан и содержит ${multiply}`);
  } catch (error) {
    console.error(error);
  }
}

myFunction(1, 2, 3);

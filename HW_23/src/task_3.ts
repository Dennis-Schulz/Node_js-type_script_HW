function myPromise1(): Promise<string> {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 1000);
  });
}
function myPromise2(): Promise<string> {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject('Promise 2 rejected');
    }, 500);
  });
}
function myPromise3(): Promise<string> {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved');
    }, 1500);
  });
}

async function runPromises() {
  try {
    const result = await Promise.all([
      myPromise1(),
      myPromise2(),
      myPromise3(),
    ]);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

runPromises();

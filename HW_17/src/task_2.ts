let id: string | number;

function displayId(id: string | number): void {
  if (typeof id === 'string') {
    console.log(`ID: ${id.toUpperCase()}`);
  } else 
    console.log(`ID: ${id * 10}`);
}

id = 'hello';
displayId(id);

id = 1002;
displayId(id);

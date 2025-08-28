interface Employee {
  name: string;
  salary: number;
}


const employee: Employee[] = [
  { name: 'John', salary: 5000 },
  { name: 'Alice', salary: 6000 },
  { name: 'Bob', salary: 7000 },
];  

function calculateSalary(employees: Employee[]): number {
 return employees.reduce((acc, employee) => acc + employee.salary, 0);
}

console.log(`Заработная плата сотрудников: ${calculateSalary(employee)}`);
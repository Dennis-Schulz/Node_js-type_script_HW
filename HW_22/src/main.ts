import { capitalize, reverseString } from './modules/stringUtils.js';
import { Finance } from './modules/finance.js';
import { UserManagement } from './modules/userManagement.js';
import { generateFibonacciSequence, generatePrimeNumbers } from './modules/sequenceUtils.js';

console.log(capitalize('hello'));
console.log(reverseString('hello'));

const loanCalculator = new Finance.LoanCalculator(1000, 10, 3);
console.log(
  `Сумма кредита: ${loanCalculator.sumCredit} р., процент: ${
    loanCalculator.annualRate
  }% годовыx, срок кредита: ${loanCalculator.years} лет(${
    loanCalculator.years * 12
  } месяцев), ежемесячный платеж: ${loanCalculator
    .calculateInterest()
    .toFixed(2)} р.`
);


const admin = new UserManagement.Admin.Admin('Admin', 'admin@mail', true);
Object.entries(admin).forEach(([key, value]) => console.log(`${key}: ${value}`));
admin.makeSuperAdmin();
console.log(`Привилегии администратора: ${admin.isAdmin()}`);
admin.revokeSuperAdmin();
console.log(`Привилегии администратора: ${admin.isAdmin()}`);


const fibonacciSequence = generateFibonacciSequence(10);
console.log(`Последовательность Фибоначчи: ${fibonacciSequence}`);
const primeNumbers = generatePrimeNumbers(100);
console.log(`Последовательность простых чисел: ${primeNumbers}`);

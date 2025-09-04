abstract class Account {
  protected balance: number;
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  private interestRate: number;

  constructor(initialBalance: number, interestRate: number) {
    super(initialBalance);
    this.interestRate = interestRate;
  }

  deposit(amount: number): void {
       this.balance += amount;
    console.log(`Depositing ${amount} into savings account... Balance: ${this.balance}`);
 
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
        this.balance -= amount;
      console.log(`Withdrawing ${amount} from savings account... Balance: ${this.balance}`);
    } else {
      console.log('Insufficient funds.');
    }
  }

  addInterest(): number {
    const interest = this.balance * this.interestRate;
    this.balance += interest;
    console.log(`Adding interest: ${interest} Balance: ${this.balance}`);
    return interest;
  }
}

class CheckingAccount extends Account {
    private fee: number=3;
  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Depositing ${amount} into checking account... Balance: ${this.balance}`);
  }
  withdraw(amount: number): void {
   const total = amount + this.fee;
    if (total <= this.balance) {
        this.balance -= total;
      console.log(`Withdrawing ${amount} (including fee of ${this.fee}) from checking account... Balance: ${this.balance}`);
    } else {
      console.log('Insufficient funds.');
    }
  }         
}

const savingsAccount = new SavingsAccount(1500, 0.05);
const checkingAccount = new CheckingAccount(800);


savingsAccount.deposit(500);
savingsAccount.withdraw(200);
savingsAccount.addInterest();
checkingAccount.deposit(1000);
checkingAccount.withdraw(500);



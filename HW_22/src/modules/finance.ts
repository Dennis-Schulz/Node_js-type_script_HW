export namespace Finance {
  export class LoanCalculator {
    sumCredit: number;
    annualRate: number;
    years: number;
    constructor(sumCredit: number, annualRate: number, years: number) {
      this.sumCredit = sumCredit;
      this.annualRate = annualRate;
      this.years = years;
    }
    calculateInterest(): number {
      const months = this.years * 12;
      const monthlyRate = this.annualRate / 100 / 12;
      if (monthlyRate === 0) {
        return this.sumCredit / months;
      }
      return (
        (this.sumCredit * monthlyRate) / (1 - (1 + monthlyRate) ** -months)
      );
    }
  }
}

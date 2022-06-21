class SumApp {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }
  getSum() {
    let sum = 0;

    for (let summand of this.numbers) {
      sum = sum + summand;
    }
    return sum;
  }
  reset() {
    this.numbers = [];
  }
}

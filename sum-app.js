class SumApp {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers += n;
  }
  getSum() {
    return this.numbers;
  }
  reset() {
    this.numbers = [];
  }
}

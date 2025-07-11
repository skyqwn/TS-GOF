import Digit from "./Digit";

export default class DigitFactory {
  private pool: Array<Digit | null> = new Array(10).fill(null);

  getDigit(n: number): Digit {
    if (!this.pool[n]) this.pool[n] = new Digit(`./data/${n}.json`);
    return this.pool[n];
  }
}

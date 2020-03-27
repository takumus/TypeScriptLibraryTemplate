import {pow} from './utils';
export class Hoge {
  private a: number;
  private b: number;
  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }
  public hello() {
    console.log(`${this.a}^${this.b} = ${pow(this.a, this.b)}`);
  }
}
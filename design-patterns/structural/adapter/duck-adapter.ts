interface IDuck {
  quack(): void;
  fly(): void;
}

interface ITurkey {
  gobble(): void;
  fly(): void;
}

export class DuckAdapter implements ITurkey {
  duck: IDuck;
  rand: number;

  public constructor(duck: IDuck) {
    this.duck = duck;
    this.rand = Math.random();
  }

  public gobble(): void {
    this.duck.quack();
  }

  public fly(): void {
    if (this.rand == 0) {
      this.duck.fly();
    }
  }
}

export class TurkeyAdapter implements IDuck {
  turkey: ITurkey;

  public constructor(turkey: ITurkey) {
    this.turkey = turkey;
  }

  public quack(): void {
    this.turkey.gobble();
  }

  public fly(): void {
    for (let i = 0; i < 2; i++) {
      this.turkey.fly();
    }
  }
}

export class WildTurkey implements ITurkey {
  public gobble(): void {
    console.log("Gobble gobble");
  }

  public fly(): void {
    console.log("I'm flying a short distance");
  }
}

export class MallardDuck implements IDuck {
  public quack(): void {
    console.log("Quack");
  }

  public fly(): void {
    console.log("I'm flying");
  }
}

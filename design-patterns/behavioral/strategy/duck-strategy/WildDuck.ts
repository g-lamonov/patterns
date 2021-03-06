import { Duck } from "./Duck";

export class WildDuck extends Duck {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  display(): void {
    console.log(`I am ${this.name}`);
    this.fly();
    this.swim();
  }
}

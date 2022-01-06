import { Duck } from "./Duck";

export class ToyDuck extends Duck {
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

  protected swim() {
    console.log("Can't swim");
  }
}

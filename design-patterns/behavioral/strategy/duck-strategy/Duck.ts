import { FlyBehavior } from "./interfaces/FlyBehavior";

export abstract class Duck {
  private flyBehavior: FlyBehavior;

  constructor() {}

  abstract display(): void;

  protected swim(): void {
    console.log("Can swim");
  }

  protected fly(): void {
    if (this.flyBehavior) {
      this.flyBehavior.fly();
    } else {
      console.log("Will fly");
    }
  }

  setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }
}

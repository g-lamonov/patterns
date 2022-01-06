import { FlyBehavior } from "../interfaces/FlyBehavior";

export class BadFlyBehavior implements FlyBehavior {
  constructor() {}

  fly(): void {
    console.log("Average flying ability");
  }
}

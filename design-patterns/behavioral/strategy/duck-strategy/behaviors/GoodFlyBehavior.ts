import { FlyBehavior } from "../interfaces/FlyBehavior";

export class GoodFlyBehavior implements FlyBehavior {
  constructor() {}

  fly(): void {
    console.log("Will fly");
  }
}

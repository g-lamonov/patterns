import { FlyBehavior } from "../interfaces/FlyBehavior";

export class NoFlyBehavior implements FlyBehavior {
  constructor() {}

  fly(): void {
    console.log("Won't fly");
  }
}

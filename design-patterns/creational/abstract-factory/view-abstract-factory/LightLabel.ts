import { Label } from "./Label";

export class LightLabel implements Label {
  color: string;

  constructor() {
    this.color = "black";
  }
}

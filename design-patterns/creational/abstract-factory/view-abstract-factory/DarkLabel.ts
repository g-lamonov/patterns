import { Label } from "./Label";

export class DarkLabel implements Label {
  color: string;

  constructor() {
    this.color = "white";
  }
}

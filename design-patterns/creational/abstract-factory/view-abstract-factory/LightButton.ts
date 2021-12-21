import { Button } from "./Button";

export class LightButton implements Button {
  color: string;
  backgroundColor: string;

  constructor() {
    this.color = "white";
    this.backgroundColor = "blue";
  }
}

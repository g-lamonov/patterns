import { Button } from "./Button";

export class DarkButton implements Button {
  color: string;
  backgroundColor: string;

  constructor() {
    this.color = "white";
    this.backgroundColor = "black";
  }
}

import { AbstractFactory } from "./AbstractFactory";
import { Button } from "./Button";
import { Label } from "./Label";

export class View {
  label: Label;
  button: Button;

  constructor(themeFactory: AbstractFactory) {
    this.label = themeFactory.createLabel();
    this.button = themeFactory.createButton();
  }
}

import { AbstractFactory } from "./AbstractFactory";
import { Button } from "./Button";
import { DarkLabel } from "./DarkLabel";
import { LightButton } from "./LightButton";
import { LightLabel } from "./LightLabel";

export class LightThemeFactory implements AbstractFactory {
  createLabel(): DarkLabel {
    return new LightLabel();
  }
  createButton(): Button {
    return new LightButton();
  }
}

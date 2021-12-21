import { Button } from "./Button";
import { Label } from "./Label";

export interface AbstractFactory {
  createLabel(): Label;
  createButton(): Button;
}

import { Dough } from "../../Ingredients/interface/Dough";
import { Sauce } from "../../Ingredients/interface/Sauce";
import { Clam } from "../../Ingredients/interface/Clam";
import { Pepperoni } from "../../Ingredients/interface/Pepperoni";
import { Cheese } from "../../Ingredients/interface/Cheese";

export abstract class Pizza {
  public dough: Dough;
  public sauce: Sauce;
  public name: string;
  public clam: Clam;
  public pepperoni: Pepperoni;
  public cheese: Cheese;

  abstract prepare(): void;

  public bake(): void {
    console.log('Pizza ' + this.getName() + ' is being baked, will take 40 minutes.')
  }

  public cut(): void {
    console.log('Pizza ' + this.getName() + ' is being cut to diagonal slices.')

  }

  public box(): void {
    console.log('Pizza ' + this.getName() + ' boxed with store official boxes.')

  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
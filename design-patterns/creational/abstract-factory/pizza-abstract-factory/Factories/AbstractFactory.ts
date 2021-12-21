import { Dough } from "../Ingredients/interface/Dough";
import { Sauce } from "../Ingredients/interface/Sauce";
import { Cheese } from "../Ingredients/interface/Cheese";
import { Pepperoni } from "../Ingredients/interface/Pepperoni";
import { Clam } from "../Ingredients/interface/Clam";

export interface AbstractPizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createPepperoni(): Pepperoni;
  createClam(): Clam;
}
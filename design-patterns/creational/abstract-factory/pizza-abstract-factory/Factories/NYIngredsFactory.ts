import { AbstractPizzaIngredientFactory } from "./AbstractFactory";
import { ThinCrustDough } from "../Ingredients/ThinCrustDough";
import { MarinaraSauce } from "../Ingredients/MarinaraSauce";
import { ReggianoCheese } from "../Ingredients/ReggianoCheese";
import { SlicedPepperoni } from "../Ingredients/SlicedPepperoni";
import { FreshClam } from "../Ingredients/FreshClam";

export class NYIngredientsFactory implements AbstractPizzaIngredientFactory {
  createDough() {
    return new ThinCrustDough();
  } 
  createSauce() {
    return new MarinaraSauce();
  }
  createCheese() {
    return new ReggianoCheese();
  }
  createPepperoni() {
    return new SlicedPepperoni(); // used for chicago as well
  }
  createClam() {
    return new FreshClam();
  }
}
import { AbstractPizzaIngredientFactory } from "./AbstractFactory";
import { ThickCrustDough } from "../Ingredients/ThickCrustDough";
import { PlumTomatoSauce } from "../Ingredients/PlumTomatoSauce";
import { MozzarellaCheese } from "../Ingredients/MozzarellaCheese";
import { SlicedPepperoni } from "../Ingredients/SlicedPepperoni";
import { FrozenClam } from "../Ingredients/FrozenClam";

export class ChicagoIngredientsFactory implements AbstractPizzaIngredientFactory {
  createDough() {
    return new ThickCrustDough();
  } 
  createSauce() {
    return new PlumTomatoSauce();
  }
  createCheese() {
    return new MozzarellaCheese();
  }
  createPepperoni() {
    return new SlicedPepperoni(); // used for chicago as well
  }
  createClam() {
    return new FrozenClam();
  }
}
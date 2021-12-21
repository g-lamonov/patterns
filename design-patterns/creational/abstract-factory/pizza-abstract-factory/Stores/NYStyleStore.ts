import { PizzaStore } from "./interface/PizzaStore";
import { Pizza } from "../Products/interface/Pizza";
import { AbstractPizzaIngredientFactory } from "../Factories/AbstractFactory";
import { CheesePizza } from "../Products/CheesePizza";
import { ClamPizza } from "../Products/ClamPizza";
import { PepperoniPizza } from "../Products/PepperoniPizza";
import { NYIngredientsFactory } from "../Factories/NYIngredsFactory";

export class NYStyleStore extends PizzaStore {
  public createPizza(type: string): Pizza | null {

    const ingredsFactory: AbstractPizzaIngredientFactory =  new NYIngredientsFactory();
    let pizza: Pizza | null;
    
    if (type === 'cheese') {
      pizza = new CheesePizza(ingredsFactory);
      pizza.setName('NY Style Cheese Pizza.');
    }
    else if (type === 'clam') {
      pizza = new ClamPizza(ingredsFactory);
      pizza.setName('NY Style Clam Pizza.');
    }
    else if (type === 'pepperoni') {
      pizza = new PepperoniPizza(ingredsFactory);
      pizza.setName('NY Style Pepperoni Pizza.');
    }
    else {
      pizza = null;
    }

    return pizza;
  }
}
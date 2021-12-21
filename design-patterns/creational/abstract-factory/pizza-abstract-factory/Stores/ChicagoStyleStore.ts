import { PizzaStore } from "./interface/PizzaStore";
import { Pizza } from "../Products/interface/Pizza";
import { ChicagoIngredientsFactory } from "../Factories/ChicagoIngredsFactory";
import { AbstractPizzaIngredientFactory } from "../Factories/AbstractFactory";
import { CheesePizza } from "../Products/CheesePizza";
import { ClamPizza } from "../Products/ClamPizza";
import { PepperoniPizza } from "../Products/PepperoniPizza";

export class ChicagoStyleStore extends PizzaStore {
  public createPizza(type: string): Pizza | null {

    const ingredsFactory: AbstractPizzaIngredientFactory =  new ChicagoIngredientsFactory();
    let pizza: Pizza | null;
    
    if (type === 'cheese') {
      pizza = new CheesePizza(ingredsFactory);
      pizza.setName('Chicago Style Cheese Pizza.');
    }
    else if (type === 'clam') {
      pizza = new ClamPizza(ingredsFactory);
      pizza.setName('Chicago Style Clam Pizza.');
    }
    else if (type === 'pepperoni') {
      pizza = new PepperoniPizza(ingredsFactory);
      pizza.setName('Chicago Style Pepperoni Pizza.');
    }
    else {
      pizza = null;
    }

    return pizza;
  }
  
}
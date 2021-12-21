import { ConcreteFactory1, ConcreteFactory2 } from "./abstract-factory-concept";

import { FurnitureFactory } from "./furniture-abstract-factory/furniture-factory";

import { DarkThemeFactory } from "./view-abstract-factory/DarkThemeFactory";
import { LightThemeFactory } from "./view-abstract-factory/LightThemeFactory";
import { View } from "./view-abstract-factory/View";

import { PizzaStore } from "./pizza-abstract-factory/Stores/interface/PizzaStore";
import { NYStyleStore } from "./pizza-abstract-factory/Stores/NYStyleStore";
import { ChicagoStyleStore } from "./pizza-abstract-factory/Stores/ChicagoStyleStore";

// Demonstration of the abstract factory concept

/**
 * EN: The client code works with factories and products only through abstract
 * types: AbstractFactory and AbstractProduct. This lets you pass any factory or
 * product subclass to the client code without breaking it.
 *
 * RU: Клиентский код работает с фабриками и продуктами только через абстрактные
 * типы: Абстрактная Фабрика и Абстрактный Продукт. Это позволяет передавать
 * любой подкласс фабрики или продукта клиентскому коду, не нарушая его.
 */
const factory1 = new ConcreteFactory1();
const productB1 = factory1.createProductB();
const productA1 = factory1.createProductA();

console.log(productB1.usefulFunctionB());
console.log(productB1.anotherUsefulFunctionB(productA1));

const factory2 = new ConcreteFactory2();
const productA2 = factory2.createProductA();
const productB2 = factory2.createProductB();

console.log(productB2.usefulFunctionB());
console.log(productB2.anotherUsefulFunctionB(productA2));

/*
 The result of the product B1.
 The result of the B1 collaborating with the (The result of the product A1.)
 The result of the product B2.
 The result of the B2 collaborating with the (The result of the product A2.)
 */

// Demonstration of an abstract factory for furniture

let furniture = FurnitureFactory.getFurniture("SmallChair");
console.log(furniture.name);
console.log(furniture.getDimensions());

furniture = FurnitureFactory.getFurniture("MediumTable");
console.log(furniture.name);
console.log(furniture.getDimensions());

furniture = FurnitureFactory.getFurniture("SmallTable");
console.log(furniture.name);
console.log(furniture.getDimensions());

furniture = FurnitureFactory.getFurniture("BigTable");
console.log(furniture.name);
console.log(furniture.getDimensions());

/*
SmallChair
{ width: 40, depth: 40, height: 40 }
MediumTable
{ width: 60, depth: 60, height: 60 }
SmallTable
{ width: 40, depth: 40, height: 40 }
BigTable
{ width: 80, depth: 80, height: 80 }
*/

console.log("\n =========================== \n");

// Demonstration of an abstract factory for view

const lightThemeFactory = new LightThemeFactory();
const lightView = new View(lightThemeFactory);
lightView.label.color;
lightView.button.color;
lightView.button.backgroundColor;

console.log(lightView);

const darkThemeFactory = new DarkThemeFactory();
const darkView = new View(darkThemeFactory);
darkView.label.color;
darkView.button.color;
darkView.button.backgroundColor;

console.log(darkView);

/*
View {
  label: LightLabel { color: 'black' },
  button: LightButton { color: 'white', backgroundColor: 'blue' }
}
View {
  label: DarkLabel { color: 'white' },
  button: DarkButton { color: 'white', backgroundColor: 'black' }
}
*/

console.log("\n =========================== \n");

// Demonstration of an abstract pizza factory

const nyStore: PizzaStore = new NYStyleStore();
const chicagoStore: PizzaStore = new ChicagoStyleStore();

const NYPizza = nyStore.orderPizza("cheese");
console.log(NYPizza);
console.log();

const chicagoPizza = chicagoStore.orderPizza("clam");
console.log(chicagoPizza);

/*
Preparing NY Style Cheese Pizza.
Added Dough Thin Crust Dough For NY Pizzas.
Added Sauce Marinara Sauce For NY Pizzas.
Added Cheese Reggiano Cheese For NY Pizzas.
Pizza NY Style Cheese Pizza. is being baked, will take 40 minutes.
Pizza NY Style Cheese Pizza. is being cut to diagonal slices.
Pizza NY Style Cheese Pizza. boxed with store official boxes.
CheesePizza {
  ingredientsFactory: NYIngredientsFactory {},
  name: 'NY Style Cheese Pizza.',
  dough: ThinCrustDough { description: 'Thin Crust Dough For NY Pizzas.' },
  sauce: MarinaraSauce { description: 'Marinara Sauce For NY Pizzas.' },
  cheese: ReggianoCheese { description: 'Reggiano Cheese For NY Pizzas.' }
}

Preparing Chicago Style Clam Pizza.
Added Dough Thick Crust Dough For Chicago Pizzas.
Added sauce Plum Tomato Sauce For Chicago Pizzas.
Added cheese Mozzarella Cheese For Chicago Pizzas.
Added clam Frozen Clam For Chicago Pizzas.
Pizza Chicago Style Clam Pizza. is being baked, will take 40 minutes.
Pizza Chicago Style Clam Pizza. is being cut to diagonal slices.
Pizza Chicago Style Clam Pizza. boxed with store official boxes.
ClamPizza {
  ingredientsFactory: ChicagoIngredientsFactory {},
  name: 'Chicago Style Clam Pizza.',
  dough: ThickCrustDough {
    description: 'Thick Crust Dough For Chicago Pizzas.'
  },
  sauce: PlumTomatoSauce {
    description: 'Plum Tomato Sauce For Chicago Pizzas.'
  },
  cheese: MozzarellaCheese {
    description: 'Mozzarella Cheese For Chicago Pizzas.'
  },
  clam: FrozenClam { description: 'Frozen Clam For Chicago Pizzas.' }
}
*/

import { User, UserBuilder } from "./user-builder";
import { ConcreteBuilder1, Director } from "./builder-concept";
import { FastFood, Mcdonalds, Size } from "./fastfood-builder";
import { ComputerBuilder } from "./computer-builder";
import { HouseBuilder } from "./house-builder";
import { RequestBuilder } from "./request-builder";

// Demonstration of the builder pattern for the user

const user: User = new UserBuilder("Jancsi")
  .setAge(18)
  .setPhone("89996669966")
  .setAddress("308 Negra Arroyo Lane")
  .build();

console.log(user);

/*
User {
  name: 'Jancsi',
  age: 18,
  phone: '89996669966',
  address: '308 Negra Arroyo Lane'
}
*/

console.log("\n =========================== \n");

// Demonstration of the builder patternDemonstration of the builder

const clientCode = (director: Director) => {
  const builder = new ConcreteBuilder1();
  director.setBuilder(builder);

  console.log("Standard basic product:");
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log("Standard full featured product:");
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

  console.log("Custom product:");
  builder.producePartA();
  builder.producePartC();
  builder.getProduct().listParts();
};

const director = new Director();
clientCode(director);

/*
Standard basic product:
Product parts: PartA1

Standard full featured product:
Product parts: PartA1, PartB1, PartC1

Custom product:
Product parts: PartA1, PartC1
*/

console.log("\n =========================== \n");

// Demonstration of the builder pattern for fast food

const mcdonalds: Mcdonalds = new Mcdonalds({
  location: "Zhujiang New Town, Canton, China",
});

const meal: FastFood = mcdonalds
  .buildBurger("Big Mac", { sauce: false })
  .buildCola(Size.Medium, { ice: false })
  .buildFries(Size.Big, { "sauce-amount": 2 })
  .getMeal();

console.log(meal);

/*
FastFood {
  _burger: { type: 'burger', name: 'Big Mac', options: { sauce: false } },
  _fires: { type: 'fires', size: 2, options: { 'sauce-amount': 2 } },
  _cola: { type: 'cola', size: 1, options: { ice: false } }
}
*/

console.log("\n =========================== \n");

// Demonstration of the builder pattern for the PC

const PC = new ComputerBuilder()
  .setName("PC")
  .addCPU("AMD A8-7600")
  .addRAM("8GB")
  .addHDD("1TB")
  .addMonitor("DELL")
  .build();

console.log(PC);

/*
Computer {
  name: 'PC',
  RAM: '8GB',
  HDD: '1TB',
  CPU: 'AMD A8-7600',
  monitor: 'DELL'
}
*/

console.log("\n =========================== \n");

// Demonstration of the builder pattern for the house

const house = new HouseBuilder()
  .setBuildingType("Igloo")
  .setWallMaterial("Ice")
  .setNumberDoors(1)
  .getResult();

console.log(house)

/*
House {
  doors: 1,
  windows: 0,
  wallMaterial: 'Ice',
  buildingType: 'Igloo'
}
*/

console.log("\n =========================== \n");

// Demonstration of the builder pattern for the request

const request = new RequestBuilder()
  .useMethod('POST')
  .forUrl('http://localhost:3000/api/v1/home')
  .payload({
    doors: 1,
    windows: 0,
    wallMaterial: 'Ice',
    buildingType: 'Igloo'
  })
  .build()

console.log(request)

/*
Request {
  url: 'http://localhost:3000/api/v1/home',
  method: 'POST',
  payload: { doors: 1, windows: 0, wallMaterial: 'Ice', buildingType: 'Igloo' }
}
*/
  
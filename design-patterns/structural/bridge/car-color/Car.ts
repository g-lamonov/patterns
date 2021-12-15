import { Color } from "./Color";

class Car {
  brand: string;
  name: string;
  description: string;
  price: string;
  places: number;
  color: Color;

  constructor(
    name,
    description,
    price,
    places = 2,
    color,
    brand = "Cartisfaction"
  ) {
    this.brand = brand;
    this.name = name;
    this.description = description;
    this.price = price;
    this.places = places;
    this.color = color;
  }
  applyColor() {
    console.log(
      `${this.name} car painted with color ${this.color.applyColor()}`
    );
  }
}

export class Adventure4x4Car extends Car {
  constructor(color) {
    super(
      "4x4 Adventure car",
      "For people that does not care about existing paths",
      55000,
      2,
      color
    );
  }
}

export class UrbanCar extends Car {
  constructor(color) {
    super("Urban car", "Small and designed for the city", 12000, 2, color);
  }
}

export class FamilyCar extends Car {
  constructor(color) {
    super("Family car", "Enjoy with your family", 30000, 5, color);
  }
}

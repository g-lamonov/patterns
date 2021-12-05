interface Prototype {
  price: number;
  clone(): Prototype;
}

export class Product implements Prototype {
  public name: string;
  public price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  clone(): Prototype {
    return new Product(this.name, this.price);
  }
}

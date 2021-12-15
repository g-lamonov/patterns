import { IShapeImplementor } from "./Implementer"

export interface IShape {
  draw(): void
}

export default class Circle implements IShape {
  #implementer: IShapeImplementor;

  constructor(implementer: IShapeImplementor) {
      this.#implementer = implementer
  }

  draw(): void {
      this.#implementer.drawImplementation()
  }
}

export class Square implements IShape {
  #implementer: IShapeImplementor

  constructor(implementer: IShapeImplementor) {
      this.#implementer = implementer
  }

  draw(): void {
      this.#implementer.drawImplementation()
  }
}
export class Ink {
  type: string;
  constructor(type) {
    this.type = type;
  }
  get() {
    return this.type;
  }
}

export class AcrylicInk extends Ink {
  constructor() {
    super("acrylic-based");
  }
}

export class AlcoholInk extends Ink {
  constructor() {
    super("alcohol-based");
  }
}

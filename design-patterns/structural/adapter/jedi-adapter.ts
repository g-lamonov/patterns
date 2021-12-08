export class Soldier {
  private level: number;
  constructor(level) {
    this.level = level;
  }

  attack() {
    return this.level * 1;
  }
}

export class Jedi {
  private level: number;
  constructor(level) {
    this.level = level;
  }

  attackWithSaber() {
    return this.level * 100;
  }
}

export class JediAdapter {
  private jedi;
  constructor(jedi) {
    this.jedi = jedi;
  }

  attack() {
    return this.jedi.attackWithSaber();
  }
}

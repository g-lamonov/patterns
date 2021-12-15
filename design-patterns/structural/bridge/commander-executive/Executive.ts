export interface Executive {
  operate(): void;
}

export class Pilot implements Executive {
  operate(): void {
    console.log("Fly");
  }
}

export class Soldier implements Executive {
  operate(): void {
    console.log("Shoot");
  }
}
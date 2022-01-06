import { Flying, Talking } from './behaviors';

export class Animal {
  private flying: Flying;
  private talking: Talking;

  constructor(flying: Flying, talking: Talking) {
    this.flying = flying;
    this.talking = talking;
  }

  doFly(): void {
    this.flying.fly();
  }

  doTalk(): void {
    this.talking.talk();
  }
}

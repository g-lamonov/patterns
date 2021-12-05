export class Person {
  age: number;
  hair: string;

  constructor(age: number = 0, hair: string = "") {
    this.age = age;
    this.hair = hair;
  }

  shallowCopy(): Person {
    return new Person(this.age, this.hair);
  }

  deepClone(): Person {
    const serializeStr = JSON.stringify(this);
    const cloneObj = JSON.parse(serializeStr) as Person;
    return cloneObj;
  }
}

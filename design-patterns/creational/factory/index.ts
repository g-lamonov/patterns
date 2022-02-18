class SimpleMembership {
  private name: string;
  private cost: number;

  constructor (name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandartMembership {
  private name: string;
  private cost: number;

  constructor (name) {
    this.name = name;
    this.cost = 50;
  }
}

class PremiumMembership {
  private name: string;
  private cost: number;

  constructor (name) {
    this.name = name;
    this.cost = 50;
  }
}

class MemberFactory {
  // Объект позволяющий более удобно взаимодействовать с factory
  static list = {
    simple: SimpleMembership,
    standart: StandartMembership,
    premium: PremiumMembership
  }

  // Метод для создания нужного instance
  create(name: string, type = 'simple') {
    // В зависимости от переменной создается нужный класс
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    const member = new Membership(name);
    
    member.type = type;
    member.define = function() {
      console.log(`${this.name}, (${this.type}): ${this.cost}`)
    }

    return member;
  }
}

const factory = new MemberFactory();

const members = [
  factory.create('Michael', 'simple'),
  factory.create('Tim', 'standart'),
  factory.create('Elena', 'premium'),
]

members.forEach((m) => {
  m.define();
})

/*

Michael, (simple): 50
Tim, (standart): 50
Elena, (premium): 50

*/
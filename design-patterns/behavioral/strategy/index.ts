import {
  ConcreteStrategyA,
  ConcreteStrategyB,
  Context,
} from "./strategy-concept";

import { Checkout } from "./checkout-strategy/checkout";
import { MastercardStrategy } from "./checkout-strategy/mastercard.strategy";
import { PayPalStrategy } from "./checkout-strategy/paypal.strategy";
import { VisaStrategy } from "./checkout-strategy/visa.strategy";

import { Animal } from "./animal-strategy/Animal";
import {
  FastFly,
  NoFly,
  NoTalk,
  SimpleTalk,
} from "./animal-strategy/behaviors";

import { Authenticator, GoogleStrategy, LocalStrategy } from "./auth-strategy";

import { BadFlyBehavior } from "./duck-strategy/behaviors/BadFlyBehavior";
import { GoodFlyBehavior } from "./duck-strategy/behaviors/GoodFlyBehavior";
import { NoFlyBehavior } from "./duck-strategy/behaviors/NoFlyBehavior";
import { BJDuck } from "./duck-strategy/BJDuck";
import { ToyDuck } from "./duck-strategy/ToyDuck";
import { WildDuck } from "./duck-strategy/WildDuck";

import AirportTicketCalculator from "./ticket-calculate-strategy/AirportTicketCalculator";
import BeachTicketCalculator from "./ticket-calculate-strategy/BeachTicketCalculator";
import ParkingLot from "./ticket-calculate-strategy/ParkingLot";

import Main from "./game-strategy/main";

// Demonstration

/**
 * EN: The client code picks a concrete strategy and passes it to the context.
 * The client should be aware of the differences between strategies in order to
 * make the right choice.
 *
 * RU: Клиентский код выбирает конкретную стратегию и передаёт её в контекст.
 * Клиент должен знать о различиях между стратегиями, чтобы сделать правильный
 * выбор.
 */
const context = new Context(new ConcreteStrategyA());
console.log("Client: Strategy is set to normal sorting.");
context.doSomeBusinessLogic();

console.log("");

console.log("Client: Strategy is set to reverse sorting.");
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();

/*
Client: Strategy is set to normal sorting.
Context: Sorting data using the strategy (not sure how it'll do it)
a,b,c,d,e

Client: Strategy is set to reverse sorting.
Context: Sorting data using the strategy (not sure how it'll do it)
e,d,c,b,a
*/

console.log("\n =========================== \n");

// Demonstration

const checkout = new Checkout();

let userId = "usr-001",
  useEmail = "eduardo@kodoti.com",
  cardNumber = "000-000-000-000",
  cvv = "123",
  amount = 2000,
  paymentMethod = "paypal";

if (paymentMethod === "paypal") {
  checkout.setStrategy(new PayPalStrategy(useEmail));
}

if (paymentMethod === "visa") {
  checkout.setStrategy(new VisaStrategy(cardNumber, cvv));
}

if (paymentMethod === "mastercard") {
  checkout.setStrategy(new MastercardStrategy(cardNumber, cvv));
}

checkout.execute(userId, amount);

/*
PayPal approved the transaction for usr-001 in the amount of US$ 2000.
*/

console.log("\n =========================== \n");

// Demonstration

// duck can fly but can't talk
const duck = new Animal(new FastFly(), new NoTalk());
console.log("Duck: ");
duck.doFly(); // fast fly
duck.doTalk(); // can't talk

// human can't fly but can talk
const human = new Animal(new NoFly(), new SimpleTalk());
console.log("\nHuman: ");
human.doFly(); // can't fly
human.doTalk(); // simple talk

// cat can't fly and can't talk
const cat = new Animal(new NoFly(), new NoTalk());
console.log("\nCat: ");
cat.doFly(); // can't fly
cat.doTalk(); // can't talk

/*
Duck:
fast fly
can't talk

Human:
can't fly
simple talk

Cat:
can't fly
can't talk
*/

console.log("\n =========================== \n");

// Demonstration

const auth = new Authenticator();

auth.setStrategy(new GoogleStrategy());
auth.authenticate("invalidpass");

auth.setStrategy(new GoogleStrategy());
auth.authenticate("12345");

auth.setStrategy(new LocalStrategy());
auth.authenticate("anurag", "12345");

auth.setStrategy(new LocalStrategy());
auth.authenticate("johnwick", "gunslotsofguns");

/*
Invalid Google User
Authenticated with Google
Invalid user. you are `Excommunicado`
Authenticated as Baba Yaga
*/

console.log("\n =========================== \n");

// Demonstration

class Client {
  static main(): void {
    const wildDuck = new WildDuck("Wild Duck");
    wildDuck.display();

    const bjDuck = new BJDuck("Beijing Duck");
    bjDuck.setFlyBehavior(new BadFlyBehavior());
    bjDuck.display();

    const toyDuck = new ToyDuck("Toy duck");
    toyDuck.setFlyBehavior(new NoFlyBehavior());
    toyDuck.display();
    toyDuck.setFlyBehavior(new GoodFlyBehavior());
    toyDuck.display();
  }
}

Client.main();

/*
I am Wild Duck
Will fly
Can swim

I am Beijing Duck
Average flying ability
Can swim

I am Toy duck
Won't fly
Can't swim

I am Toy duck
Will fly
Can't swim
*/

console.log("\n =========================== \n");

// Demonstration

const parkingLot1 = new ParkingLot("beach", new BeachTicketCalculator());
parkingLot1.checkin("ABC-9876", new Date("2021-10-10T10:00:00"));
const ticket1 = parkingLot1.checkout(
  "ABC-9876",
  new Date("2021-10-10T13:00:00")
);
console.log(`Amount: ${ticket1.amount}`);

const parkingLot2 = new ParkingLot("airport", new AirportTicketCalculator());
parkingLot2.checkin("ABC-9876", new Date("2021-10-10T10:00:00"));
const ticket2 = parkingLot2.checkout(
  "ABC-9876",
  new Date("2021-10-10T20:00:00")
);
console.log(`Amount: ${ticket2.amount}`);

/*
Amount: 15
Amount: 31
*/

console.log("\n =========================== \n");

// Demonstration

const main = new Main();

console.log(`Castle Siege`);
console.log(main.playTroll());

console.log(`Castle Defence`);
console.log(main.playArcher());
console.log(main.playKnight());
console.log(main.playKing());
console.log(main.playQueen());

console.log(`Troll defeated`);

/*
Castle Siege
Troll behavior: using axe.
Castle Defence
Archer behavior: using bow.
Knight behavior: using sword.
King behavior: using sword.
Queen behavior: using enchanted sword.
Troll defeated
*/

import { Adaptee, Adapter, Target } from "./adapter-concept";
import { AudioPlayer } from "./audio-adapter";
import { Transaction, TransactionAdapter } from "./transaction-adapter";
import { MallardDuck, TurkeyAdapter, WildTurkey } from "./duck-adapter";
import { Jedi, JediAdapter, Soldier } from "./jedi-adapter";

// Demonstration of the adapter pattern

console.log("Client: I can work just fine with the Target objects:");
const target = new Target();
console.log(target.request());

console.log("");

const adaptee = new Adaptee();
console.log("Client: The Adaptee class has a weird interface. See, I don't understand it:");
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log("");

console.log("Client: But I can work with it via the Adapter:");
const adapter = new Adapter(adaptee);
console.log(adapter.request());

/*
Client: I can work just fine with the Target objects:
Target: The default target's behavior.

Client: The Adaptee class has a weird interface. See, I don't understand it:
Adaptee: .eetpadA eht fo roivaheb laicepS

Client: But I can work with it via the Adapter:
Adapter: (TRANSLATED) Special behavior of the Adaptee.
*/

console.log("\n =========================== \n");

// Demonstration of the adapter pattern for audio

let audioPlayer = new AudioPlayer();
audioPlayer.play("vlc", "music1");
audioPlayer.play("mp4", "music2");
audioPlayer.play("mp3", "music3");
audioPlayer.play("wav", "music3");

/*
Playing mp3 file music3
Media not supported - wav
*/

console.log("\n =========================== \n");

// Demonstration of the adapter pattern for a transaction

const transaction = new Transaction("AB3HB987HBG7568", 1000, 2);
const transaction1 = new TransactionAdapter(transaction);
console.log(transaction1);

/*
TransactionAdapter {
  trackNumber: 'AB3HB987HBG7568',
  amount: 1000,
  status: 'paid'
}
*/

console.log("\n =========================== \n");

// Demonstration of the adapter pattern for a duck

let duck: MallardDuck = new MallardDuck();
let turkey: WildTurkey = new WildTurkey();

let turkeyAdapter = new TurkeyAdapter(turkey);

console.log("The Turkey says...");
turkey.gobble();
turkey.fly();

console.log("\nThe Mallard Duck says...");
duck.quack();
duck.fly();

console.log("\nThe TurkeyAdapter says...");

turkeyAdapter.quack();
turkeyAdapter.fly();

/*
The Turkey says...
Gobble gobble
I'm flying a short distance

The Mallard Duck says...
Quack
I'm flying

The TurkeyAdapter says...
Gobble gobble
I'm flying a short distance
I'm flying a short distance
*/

console.log("\n =========================== \n");

// Demonstration of the adapter pattern for a jedi

const soldier = new Soldier(1);
console.log(soldier.attack());

const jedi = new Jedi(1);
console.log(jedi.attackWithSaber());

const jediAdapter = new JediAdapter(jedi);
console.log(jediAdapter.attack());

/*
1
100
100
*/
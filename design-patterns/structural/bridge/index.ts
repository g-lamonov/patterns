import { Abstraction, ExtendedAbstraction } from "./concept/Abstraction";
import { clientCode, ConcreteImplementationA, ConcreteImplementationB } from "./concept/Implementation";
import { Adventure4x4Car, FamilyCar, UrbanCar } from "./car-color/Car";
import { GreyColor, MatteBlackColor, RedColor } from "./car-color/Color";
import { PutFirstBoxArranger, PutLastBoxArranger } from "./box_container-box_arranger/BoxArranger";
import { Box, StraightBoxContainer } from "./box_container-box_arranger/BoxContainer";
import { Radio, Tv } from "./device-remote_control/device";
import { RemoteControl, RemoteControlWithVolume } from "./device-remote_control/remote-control";
import { CircleImplementer, SquareImplementer } from "./shape-implementer/Implementer";
import Circle, { Square } from "./shape-implementer/Shape";
import { ArtistResource, SongResource } from "./view-resource/Resource";
import { DetailedView, MinimalView } from "./view-resource/View";
import { Pilot, Soldier } from "./commander-executive/Executive";
import { AirForceCommander, SpecialForceCommander } from "./commander-executive/Commander";

// Demonstration of the bridge pattern concept

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
/**
 * EN: The client code should be able to work with any pre-configured
 * abstraction-implementation combination.
 *
 * RU: Клиентский код должен работать с любой предварительно сконфигурированной
 * комбинацией абстракции и реализации.
 */
clientCode(abstraction);

console.log('');

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);

/*
Abstraction: Base operation with:
ConcreteImplementationA: Here's the result on the platform A.

ExtendedAbstraction: Extended operation with:
ConcreteImplementationB: Here's the result on the platform B.
*/

console.log("\n =========================== \n");

// Demonstration of the bridge pattern car-color

const familyCar = new FamilyCar(new GreyColor());
const adventureCar = new Adventure4x4Car(new MatteBlackColor());
const urbanCar = new UrbanCar(new RedColor());

familyCar.applyColor();
adventureCar.applyColor();
urbanCar.applyColor();

/*
Family car car painted with color grey
4x4 Adventure car car painted with color matte black
Urban car car painted with color red
*/

console.log("\n =========================== \n");

// Demonstration of the device-remote_control bridge pattern

const tv = new Tv();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
radioRemoteControl.togglePower();

console.log();

const tvRemoteControl = new RemoteControlWithVolume(tv);
radioRemoteControl.togglePower();
tvRemoteControl.volumeUp();
tvRemoteControl.volumeUp();
tvRemoteControl.volumeDown();

/*
Radio power status: true

Radio power status: false
TV had volume 10 now has 20
TV had volume 20 now has 30
TV had volume 30 now has 20
*/

console.log("\n =========================== \n");

// Demonstration of the bridge pattern box_arranger-box_container

const items: Box[] = [
  {
    id: "1",
    value: "abc",
  },
];
const putFirstBoxArranger = new PutFirstBoxArranger();
const putLastBoxArranger = new PutLastBoxArranger();

const rv = new StraightBoxContainer(items, putLastBoxArranger);
rv.arrangeItem({
  id: "3",
  value: "dfa",
});

console.log(rv.items);

const straightBoxContainer = new StraightBoxContainer(items, putFirstBoxArranger);
straightBoxContainer.arrangeItem({
  id: "3",
  value: "dfa",
});

console.log(straightBoxContainer.items);

/*
[ { id: '1', value: 'abc' }, { id: '3', value: 'dfa' } ]
[ { id: '3', value: 'dfa' }, { id: '1', value: 'abc' } ]
*/

console.log("\n =========================== \n");

// Demonstration of the bridge pattern shape-implementor

const circle = new Circle(new CircleImplementer())
circle.draw()

const square = new Square(new SquareImplementer())
square.draw()

/*
    ******
  **      **
 *          *
*            *
*            *
 *          *
  **      **
    ******
**************
*            *
*            *
*            *
*            *
*            *
*            *
**************
*/

console.log("\n =========================== \n");

// Demonstration of the bridge pattern resource-view

const artist = new ArtistResource({
  name: 'David Bowie',
  bio: 'David Bowie was an English singer-songwriter and actor',
  image: '/img/davidBowie.png',
  slug: '/u/anuraghazra'
})

const song = new SongResource({
  name: 'Starman',
  lyrics: 'Goodbye love',
  coverImage: '/img/starman.png',
  spotifyLink: '/s/song/132894'
})

const artistDetailView = new DetailedView(artist);
const artistMinimalView = new MinimalView(artist);

const songDetailView = new DetailedView(song);
const songMinimalView = new MinimalView(song);

console.log(artistDetailView.render())
console.log(songDetailView.render())
console.log(artistMinimalView.render())
console.log(songMinimalView.render())

/*
David Bowie,
/img/davidBowie.png,
David Bowie was an English singer-songwriter and actor,
/u/anuraghazra.

Starman,
/img/starman.png,
Goodbye love,
/s/song/132894.


David Bowie,
/u/anuraghazra.

Starman,
/s/song/132894.
*/

console.log("\n =========================== \n");

// Demonstration of the bridge pattern commander-executive

const commanderA = new AirForceCommander(new Pilot());
const commanderB = new SpecialForceCommander(new Soldier());

commanderA.order();
commanderB.order();


/*
Air Force commander make order
Fly
Special Force commander make order
Shoot
*/
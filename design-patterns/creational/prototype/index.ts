
import { Person } from "./person-prototype";
import { Product } from "./product-prototype";
import { WebPage } from "./web-page-protype";

// Demonstration of the prototype pattern for the product

const productA = new Product("Lamp", 100);
const productB = productA.clone();
console.log(productA);
console.log(productB);
productB.price = 200;
console.log(productB)


/*
Product { name: 'Lamp', price: 100 }
Product { name: 'Lamp', price: 100 }
Product { name: 'Lamp', price: 200 }
*/

console.log("\n =========================== \n");

// Demonstration of the prototype pattern for the web page

const newPage: WebPage = new WebPage();
const clonedPage: WebPage = newPage.clone();

console.log(clonedPage)
console.log(newPage)

/*
WebPage { content: 'Page Loaded' }
WebPage { content: 'Page Loaded' }
*/

console.log("\n =========================== \n");

// Demonstration of a prototype pattern for the person

const person = new Person(3, '');
console.log(`origin person : ${JSON.stringify(person)}`);

const person2 = person.shallowCopy();
console.log(`copied person : ${JSON.stringify(person2)}\n`);

person.age = 5;
console.log(`origin person: ${JSON.stringify(person)}`);
console.log(`copied person: ${JSON.stringify(person)}`);

/*
origin person : {"age":3,"hair":""}
copied person : {"age":3,"hair":""}

origin person: {"age":5,"hair":""}
copied person: {"age":5,"hair":""}
*/

console.log("\n =========================== \n");

const person3 = new Person(3, undefined);
console.log(`origin person : ${JSON.stringify(person3)}`);

const person4 = person3.deepClone();
person3.age = 5;
console.log(`origin person: ${JSON.stringify(person3)}`);
console.log(`copied person: ${JSON.stringify(person4)}\n`);

/*
origin person : {"age":3,"hair":""}
origin person: {"age":5,"hair":""}
copied person: {"age":3,"hair":""}
*/
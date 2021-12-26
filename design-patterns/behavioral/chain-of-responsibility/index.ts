import { DogHandler, Handler, MonkeyHandler, SquirrelHandler } from "./cor-concept-animal";
import { ApprovalRequest } from "./cor-school-approval/ApprovalRequest";
import { CollegeApproval } from "./cor-school-approval/CollegeApproval";
import { DepartmentApproval } from "./cor-school-approval/DepartmentApproval";
import { SchoolManagerApproval } from "./cor-school-approval/SchoolManagerApproval";
import { ViceSchoolManagerApproval } from "./cor-school-approval/ViceSchoolManagerApproval";
import LogHandler from "./cor-request/LogHandler";
import LoginHandler from "./cor-request/LoginHandler";
import Request from "./cor-request/Request";
import Response from "./cor-request/Response";
import Router from "./cor-request/Router";
import { BlogHandler, BlogPostHandler, NotFoundHandler, RootHandler } from "./cor-blog/handlers";
import { Discount, ShoppingCart } from "./cor-discount";
import { ChainModule } from "./cor-condept";

// Demonstration cor concept

/**
 * EN: The client code is usually suited to work with a single handler. In most
 * cases, it is not even aware that the handler is part of a chain.
 *
 * RU: Обычно клиентский код приспособлен для работы с единственным
 * обработчиком. В большинстве случаев клиенту даже неизвестно, что этот
 * обработчик является частью цепочки.
 */
 function clientCode(handler: Handler) {
    const foods = ["Nut", "Banana", "Cup of coffee"];
  
    for (const food of foods) {
      console.log(`Client: Who wants a ${food}?`);
  
      const result = handler.handle(food);
      if (result) {
        console.log(`  ${result}`);
      } else {
        console.log(`  ${food} was left untouched.`);
      }
    }
  }
  
  /**
   * EN: The other part of the client code constructs the actual chain.
   *
   * RU: Другая часть клиентского кода создает саму цепочку.
   */
  const monkey = new MonkeyHandler();
  const squirrel = new SquirrelHandler();
  const dog = new DogHandler();
  
  monkey.setNext(squirrel).setNext(dog);
  
  /**
   * EN: The client should be able to send a request to any handler, not just the
   * first one in the chain.
   *
   * RU: Клиент должен иметь возможность отправлять запрос любому обработчику, а
   * не только первому в цепочке.
   */
  console.log("Chain: Monkey > Squirrel > Dog\n");
  clientCode(monkey);
  console.log("");
  
  console.log("Subchain: Squirrel > Dog\n");
  clientCode(squirrel);
  

/*
Chain: Monkey > Squirrel > Dog

Client: Who wants a Nut?
  Squirrel: I'll eat the Nut.
Client: Who wants a Banana?
  Monkey: I'll eat the Banana.
Client: Who wants a Cup of coffee?
  Cup of coffee was left untouched.
*/

console.log("\n =========================== \n");

// Demonstration cor for approval

/**
 * Chain-of-responsibility pattern, one-way looping chain structure, with classes instead of if-else
 */
 class Client {
  static main(): void {
    // Create related approval objects
    const schoolManagerApproval = new SchoolManagerApproval("President");
    const viceSchoolManagerApproval = new ViceSchoolManagerApproval("Vice President");
    const departmentApproval = new DepartmentApproval("Director");
    const collegeApproval = new CollegeApproval("Dean");
    
    // Add chains and loop them up.
    // That way, no matter which class you start processing from, you'll eventually find the person in charge.
    departmentApproval.setApproval(collegeApproval);
    collegeApproval.setApproval(viceSchoolManagerApproval);
    viceSchoolManagerApproval.setApproval(schoolManagerApproval);
    schoolManagerApproval.setApproval(departmentApproval);

    const approvalRequest = new ApprovalRequest(11000);
    collegeApproval.reduceRequest(approvalRequest);
  }
}

Client.main();


/*
Request amount 11000 was processed by President
*/


console.log("\n =========================== \n");

// Demonstration

const request1 = new Request("/login", "post", {
  username: "username",
  password: "password",
});

const router = new Router();
const response = new Response();
const logHandler = new LogHandler();
const loginHandler = new LoginHandler();

logHandler.setNext(loginHandler);
router.register(logHandler);

router.process(request1, response);

console.log(response)

const request2 = new Request("/login", "post", {
  username: "sedond_user",
  password: "password",
});

router.process(request2, response);

console.log(response)

/*
Request {
  url: '/login',
  method: 'post',
  body: { username: 'username', password: 'password' }
}
Response { body: { ok: true, token: '123456' } }
Request {
  url: '/login',
  method: 'post',
  body: { username: 'sedond_user', password: 'password' }
}
Response { body: { ok: false } }
*/


console.log("\n =========================== \n");

// Demonstration

// simple API request handler
// client makes request and proper resource should be served
const blog = new BlogHandler();
const blogPost = new BlogPostHandler();
const root = new RootHandler();
const notFound = new NotFoundHandler();

// create chain starting from root
root
  .setNext(blog) // add blog
  .setNext(blogPost) // blog post is a child
  .setNext(notFound); // if it's neither home, blog or blog post return not found page;

console.log(root.handle('/'));
/*
 RootHandler
 This is a home
 */

console.log(root.handle('/blog'));
/*
  RootHandler
  -> BlogHandler
  This is a blog
 */

console.log(root.handle('/blog/post'));
/*
 RootHandler
 -> BlogHandler
 -> BlogPostHandler
 This is a blog post
 */

console.log(root.handle('/about'));
/*
 RootHandler
 -> BlogHandler
 -> BlogPostHandler
 -> NotFoundHandler
 404 Not Found
 */

console.log("\n =========================== \n");

// Demonstration

const shoppingCart = new ShoppingCart();

shoppingCart.addProduct(150);
shoppingCart.addProduct(400);

const discount = new Discount();
const discountAmount = discount.calc(shoppingCart.products);
console.log(discountAmount);

/*
0.1
*/


console.log("\n =========================== \n");

// Demonstration

let handler1: ChainModule.Handler = new ChainModule.ConcreteHandler1();
let handler2: ChainModule.Handler = new ChainModule.ConcreteHandler2();
let handler3: ChainModule.Handler = new ChainModule.ConcreteHandler3();
handler1.setSuccessor(handler2);
handler2.setSuccessor(handler3);

// Generate and process request
let requests: Array<number> = [2, 5, 14, 22, 18, 3, 27, 20];

for (let request of requests) {
  handler1.handleRequest(request);
}

/*
ConcreteHandler1 handled request 2
ConcreteHandler1 handled request 5
ConcreteHandler2 handled request 14
ConcreteHandler3 handled request 22
ConcreteHandler2 handled request 18
ConcreteHandler1 handled request 3
ConcreteHandler3 handled request 27
ConcreteHandler3 handled request 20
*/

export module ChainModule {
  export abstract class Handler {
    protected successor: Handler;

    public setSuccessor(successor: Handler) {
      this.successor = successor;
    }

    public abstract handleRequest(request: number);
  }

  export class ConcreteHandler1 extends Handler {
    public handleRequest(request: number) {
      if (request >= 0 && request < 10) {
        console.log(`${this.constructor.name} handled request ${request}`);
      } else if (this.successor !== null) {
        this.successor.handleRequest(request);
      }
    }
  }

  export class ConcreteHandler2 extends Handler {
    public handleRequest(request: number) {
      if (request >= 10 && request < 20) {
        console.log(`${this.constructor.name} handled request ${request}`);
      } else if (this.successor !== null) {
        this.successor.handleRequest(request);
      }
    }
  }

  export class ConcreteHandler3 extends Handler {
    public handleRequest(request: number) {
      if (request >= 20 && request < 30) {
        console.log(`${this.constructor.name} handled request ${request}`);
      } else if (this.successor !== null) {
        this.successor.handleRequest(request);
      }
    }
  }
}

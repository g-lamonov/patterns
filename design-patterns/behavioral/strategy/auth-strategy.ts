interface IStrategy {
  authenticate(...args: any): any;
}

export class Authenticator {
  strategy: any;
  constructor() {
    this.strategy = null;
  }

  setStrategy(strategy: any) {
    this.strategy = strategy
  }

  authenticate(...args: any) {
    if (!this.strategy) {
      console.log('No Authentication strategy provided')
      return
    }
    return this.strategy.authenticate(...args);
  }
}


export class GoogleStrategy implements IStrategy {
  authenticate(googleToken: string) {
    if (googleToken !== '12345') {
      console.log('Invalid Google User');
      return
    }
    console.log('Authenticated with Google')
  }
}

export class LocalStrategy implements IStrategy {
  authenticate(username: string, password: string) {
    if (username !== 'johnwick' && password !== 'gunslotsofguns') {
      console.log('Invalid user. you are `Excommunicado`');;
      return
    }
    console.log('Authenticated as Baba Yaga');
  }
}
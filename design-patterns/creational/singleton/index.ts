class Singleton {
  private static instance: Singleton;

  private constructor() {
    return;
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      console.log('The object is not yet created');
      return Singleton.instance = new Singleton();
    }
    console.log('Object has already been created');
    return Singleton.instance;
  }
}

Singleton.getInstance();
Singleton.getInstance();

/*

The object is not yet created
Object has already been created

*/
import { Executive } from "./Executive";

export class Commander {
  executeObject: Executive;

  constructor(executeObject: Executive) {
    this.executeObject = executeObject;
  }

  order(): void {
    this.executeObject.operate();
  }
}

export class AirForceCommander extends Commander {
  order(): void {
    console.log("Air Force commander make order");
    super.order();
  }
}

export class SpecialForceCommander extends Commander {
  order(): void {
    console.log("Special Force commander make order");
    super.order();
  }
}

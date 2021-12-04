export class ComputerBuilder {
  private name: string;
  private RAM: string;
  private HDD: string;
  private CPU: string;
  private monitor: string;

  constructor() {
    this.name = "";
    this.RAM = "";
    this.HDD = "";
    this.CPU = "";
    this.monitor = "";
  }

  setName(name) {
    this.name = name;
    return this;
  }
  addRAM(value) {
    this.RAM = value;
    return this;
  }
  addHDD(value) {
    this.HDD = value;
    return this;
  }
  addCPU(value) {
    this.CPU = value;
    return this;
  }
  addMonitor(value) {
    this.monitor = value;
    return this;
  }

  build() {
    return new Computer(this.name, this.RAM, this.HDD, this.CPU, this.monitor);
  }
}

class Computer {
  private name: string;
  private RAM: string;
  private HDD: string;
  private CPU: string;
  private monitor: string;

  constructor(name, RAM, HDD, CPU, monitor) {
    this.name = name;
    this.RAM = RAM;
    this.HDD = HDD;
    this.CPU = CPU;
    this.monitor = monitor;
  }

  printSpecs() {
    console.log(`
        --- ${this.name} ---
        - RAM: ${this.RAM}
        - HDD: ${this.HDD}
        - CPU: ${this.CPU}
        - Monitor: ${this.monitor}
      `);
  }
}

import { IResource } from "./Resource";

export abstract class View {
  resource: IResource;
  constructor(resource: IResource) {
    this.resource = resource;
  }

  render(): string {
    return ''
  };
}

export class DetailedView extends View {
  render() {
    return `
${this.resource.title()},
${this.resource.image()}, 
${this.resource.body()},
${this.resource.link()}.
    `
  }
}
export class MinimalView extends View {
  render() {
    return `
${this.resource.title()},
${this.resource.link()}.
    `
  }
}
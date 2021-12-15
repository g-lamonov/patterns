import { BoxArranger } from "./BoxArranger";

export interface Box {
  id: string;
  value: string;
}

abstract class BoxContainer {
  constructor(public items: Box[] = [], protected boxArranger: BoxArranger) {}
  arrangeItem(item: Box) {}
}

export class StraightBoxContainer extends BoxContainer {
  arrangeItem(item: Box) {
    this.items = this.boxArranger.arrangeItem(item, this.items);
  }
}

export class ReversingBoxContainer extends BoxContainer {
  arrangeItem(item: Box) {
    this.items = this.boxArranger.arrangeItem(item, this.items).reverse();
  }
}
import { DocumentItem } from "./DocumentItem";

export abstract class DocumentItemState {
  public name: string;
  public item: DocumentItem;

  constructor() {}

  public setContext(item: DocumentItem) {
    this.item = item;
  }

  public abstract publish(): void;
  public abstract delete(): void;
}

import { DocumentItemState } from "./DocumentItemState";
import { DraftDocumentItemState } from "./DraftDocumentItemState";

export class DocumentItem {
  public text: string;
  private state: DocumentItemState;

  constructor() {
    this.setState(new DraftDocumentItemState());
  }

  logState() {
    console.log(`State: ${this.state.name}`);
  }

  getState() {
    return this.state;
  }

  setState(state: DocumentItemState) {
    this.state = state;
    this.state.setContext(this);
  }

  publishDoc() {
    this.state.publish();
  }

  deleteDoc() {
    this.state.delete();
  }
}
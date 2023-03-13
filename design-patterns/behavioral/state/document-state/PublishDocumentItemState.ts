import { DocumentItemState } from "./DocumentItemState";
import { DraftDocumentItemState } from "./DraftDocumentItemState";

export class PublishDocumentItemState extends DocumentItemState {
  constructor() {
    super();
    this.name = 'PublishDocument';
  }

  public publish() {
    console.log(`You cannot publish a published text.`)
  }
 
 public delete() {
    console.log('Withdrawn from publication.');
    this.item.setState(new DraftDocumentItemState());
  }
}

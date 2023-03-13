import { DocumentItemState } from "./DocumentItemState";
import { PublishDocumentItemState } from "./PublishDocumentItemState";

export class DraftDocumentItemState extends DocumentItemState {
  constructor() {
    super();
    this.name = 'DraftDocument';
  }

  public publish() {
    console.log(`Text "${this.item.text}" sent to website`)
    this.item.setState(new PublishDocumentItemState());
  }
 
 public delete() {
    console.log('Document deleted');
  }
}

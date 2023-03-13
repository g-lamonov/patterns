import { DocumentItem } from "./document-state/DocumentItem";

// Demonstration

const document = new DocumentItem();
document.text = 'My post!';
document.logState();

document.publishDoc();
document.logState();
document.publishDoc();

document.deleteDoc();
document.logState();

/*
State: DraftDocument
Text "My post!" sent to website
State: PublishDocument
You cannot publish a published text.
Withdrawn from publication.
State: DraftDocument
*/

console.log("\n =========================== \n");

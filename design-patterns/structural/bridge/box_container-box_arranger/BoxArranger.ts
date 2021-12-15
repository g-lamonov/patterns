import { Box } from "./BoxContainer";

export interface BoxArranger {
  arrangeItem(item: Box, items: Box[]): Box[];
}

export class PutLastBoxArranger implements BoxArranger {
  arrangeItem(item: Box, items: Box[]): Box[] {
    items = items.concat(item);
    return items;
  }
}

export class PutFirstBoxArranger implements BoxArranger {
  arrangeItem(item: Box, items: Box[]): Box[] {
    let result = items.slice();
    result.unshift(item);
    return result;
  }
}
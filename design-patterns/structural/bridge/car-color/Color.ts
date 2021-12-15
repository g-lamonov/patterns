export class Color {
  applyColor() {
    throw new Error("This method should be overwritten");
  }
}

export class RedColor extends Color {
  applyColor() {
    return "red";
  }
}

export class MatteBlackColor extends Color {
  applyColor() {
    return "matte black";
  }
}

export class GreyColor extends Color {
  applyColor() {
    return "grey";
  }
}

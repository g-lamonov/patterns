export interface IShapeImplementor {
  drawImplementation(): void
}

export class CircleImplementer implements IShapeImplementor {
  drawImplementation() {
      console.log('    ******');
      console.log('  **      **');
      console.log(' *          *');
      console.log('*            *');
      console.log('*            *');
      console.log(' *          *');
      console.log('  **      **');
      console.log('    ******');
  }
}

export class SquareImplementer implements IShapeImplementor {
  drawImplementation(): void {
      console.log('**************')
      console.log('*            *')
      console.log('*            *')
      console.log('*            *')
      console.log('*            *')
      console.log('*            *')
      console.log('*            *')
      console.log('**************')
  }
}

import Board from './Board';

export default class PlayerBoard extends Board {
   constructor(board, mask) {
      super();
      this.array = board.array;
      this.mask = mask;
   }

   getCells() {
      const boardSize = this.getBoardSize();
      let cells = [];

      for (let row = 1; row <= boardSize; row++) {
         for (let column = 1; column <= boardSize; column++) {
            cells.push({
               row,
               column,
               value: this.getCell(row, column),
               readOnly: !this.canBeCellModified(row, column)
            })
         }
      }

      return cells;
   }

   setCell(row, column, value) {
      if (!this.canBeCellModified(row, column))
         throw new Error(`This cell (${row}, ${column}) of player board cannot be modified.`);
      
      super.setCell(row, column, value);
   }

   deleteCell(row, column) {
      if (!this.canBeCellModified(row, column))
         throw new Error(`This cell (${row}, ${column}) of player board cannot be modified.`);

      super.deleteCell(row, column);
   }
   
   canBeCellModified(row, column) {
      return this.mask.findIndex(cellPosition => 
         cellPosition.row === row && cellPosition.column === column) === -1;
   }
}
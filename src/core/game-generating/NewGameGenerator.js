import arrayShuffle from 'array-shuffle';

import RestrictedBoard from '../boards/RestrictedBoard';
import { getIndex, getRowFromIndex, getColumnFromIndex } from '../boards/boardUtils';

export default class NewGameGenerator {
   generateGame() {
      const newGame = new RestrictedBoard();
      this.stateSpaceSearch(newGame, 1, 1);
      return newGame;
   }

   getShuffledNumbersAsInputForBoardCells() {
      return arrayShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
   }

   calculateNextCellPosition(boardSize, row, column) {
      let index = getIndex(boardSize, row, column);

      return {
         row: getRowFromIndex(boardSize, index + 1),
         column: getColumnFromIndex(boardSize, index + 1)
      };
   }

   stateSpaceSearch(partiallyGeneratedBoard, currentCellRow, currentCellColumn) {
      const boardSize = partiallyGeneratedBoard.getBoardSize();

      if (currentCellRow > boardSize)
         return true;   // we have reached the end -> sudoku has been successfully created
      
      const inputNumbersForCell = this.getShuffledNumbersAsInputForBoardCells();
      const nextCellPosition = this.calculateNextCellPosition(boardSize, currentCellRow, currentCellColumn);

      for (let i = 0; i < inputNumbersForCell.length; i++) {
         try {
            partiallyGeneratedBoard.setCell(currentCellRow, currentCellColumn, inputNumbersForCell[i]);
         }
         catch (err) {
            continue;
         }

         const result = this.stateSpaceSearch(
            partiallyGeneratedBoard, nextCellPosition.row, nextCellPosition.column);
         
         if (result)
            return true;
      }

      partiallyGeneratedBoard.deleteCell(currentCellRow, currentCellColumn);

      return false;
   }
}
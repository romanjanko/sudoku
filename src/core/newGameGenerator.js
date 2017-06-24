import arrayShuffle from 'array-shuffle';

import Board from './Board';
import RestrictedBoard from './RestrictedBoard';

export default class NewGameGenerator {
   generateGame(gameDifficulty) {
      const newGameSolution = new RestrictedBoard();
      this.stateSpaceSearch(newGameSolution, 1, 1);

      const playerBoard = this.createPlayerBoard(newGameSolution);

      return {
         newGame: playerBoard,
         newGameSolution
      };
   }

   createPlayerBoard(boardWithSolution) {
      
   }

   getShuffledNumbersAsInputForBoardCells() {
      return arrayShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
   }

   calculateNextCellPosition(boardSize, row, column) {
      let index = (row - 1) * boardSize + (column - 1);

      return {
         row: Math.floor((index + 1) / boardSize) + 1,
         column: (index + 1) % boardSize + 1
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
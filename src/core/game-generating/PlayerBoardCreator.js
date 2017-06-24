import arrayShuffle from 'array-shuffle';

import Board from '../boards/Board';
import { getRowFromIndex, getColumnFromIndex } from '../boards/boardUtils';

export default class PlayerBoardCreator {
   createFromGeneratedGame(newGame, difficulty) {
      const newPlayerBoard = new Board();
      const cellsToShow = this.determineCellsToShow(newPlayerBoard.getBoardSize());

      cellsToShow.forEach(cellPosition => {
         const { row, column } = cellPosition;
         const number = newGame.getCell(row, column);
         newPlayerBoard.setCell(row, column, number);
      });

      return newPlayerBoard;
   }

   determineCellsToShow(boardSize) {
      const allPositions = this.getAllCellsPositions(boardSize);
      return arrayShuffle(allPositions).slice(45);
   }

   getAllCellsPositions(boardSize) {
      const length = boardSize * boardSize;
      let positions = [];

      for (let i = 0; i < length; i++) {
         positions.push({
            row: getRowFromIndex(boardSize, i),
            column: getColumnFromIndex(boardSize, i)
         });
      }

      return positions;
   }
}
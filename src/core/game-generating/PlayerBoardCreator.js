import arrayShuffle from 'array-shuffle';

import Board from '../boards/Board';
import PlayerBoard from '../boards/PlayerBoard';
import { getRowFromIndex, getColumnFromIndex } from '../boards/boardUtils';

export default class PlayerBoardCreator {
   createFromGeneratedGame(newGame, difficulty) {
      const cellsToShow = this.determineCellsToShow(newGame.getBoardSize());
      const tempBoard = new Board();

      cellsToShow.forEach(cellPosition => {
         const { row, column } = cellPosition;
         const number = newGame.getCell(row, column);
         tempBoard.setCell(row, column, number);
      });

      return new PlayerBoard(tempBoard, cellsToShow);
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
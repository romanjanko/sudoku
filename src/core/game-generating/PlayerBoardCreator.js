import arrayShuffle from 'array-shuffle';

import Board from '../boards/Board';
import PlayerBoard from '../boards/PlayerBoard';
import { getRowFromIndex, getColumnFromIndex } from '../boards/boardUtils';
import Game from '../Game';

export default class PlayerBoardCreator {
   createFromGeneratedGame(newGame, difficulty) {
      const cellsToShow = this.determineCellsToShow(newGame.getBoardSize(), difficulty);
      const tempBoard = new Board();

      cellsToShow.forEach(cellPosition => {
         const { row, column } = cellPosition;
         const number = newGame.getCell(row, column);
         tempBoard.setCell(row, column, number);
      });

      return new PlayerBoard(tempBoard, cellsToShow);
   }

   determineCellsToShow(boardSize, difficulty) {
      const allPositions = this.getAllCellsPositions(boardSize);
      const numberOfCells = this.getNumberOfCellsToShow(difficulty);
      return arrayShuffle(allPositions).slice(0, numberOfCells);
   }

   getNumberOfCellsToShow(difficulty) {
      switch (difficulty) {
         case Game.difficulty.easy:
            return 79; //TODO 65;
         case Game.difficulty.medium:
            return 55;
         case Game.difficulty.hard:
            return 40;
         default:
            return 65;
      }
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
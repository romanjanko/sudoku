import { areBoardsEqual } from './boards/boardUtils';

export default class Game {
   static difficulty = {
      easy: "easy",
      medium: "medium",
      hard: "hard"
   };

   constructor(gameDifficulty, solutionBoard, playerBoard) {
      this.gameDifficulty = gameDifficulty;
      this.solutionBoard = solutionBoard;
      this.playerBoard = playerBoard;
   }

   hint(row, column) {
      return this.solutionBoard.getCell(row, column);
   }

   getPlayerBoardCells() {
      return this.playerBoard.getCells();
   }

   setPlayerBoardCell(row, column, number) {
      this.playerBoard.setCell(row, column, number);
   }

   deletePlayerBoardCell(row, column) {
      this.playerBoard.deleteCell(row, column);
   }

   isGameSuccessfullySolved = () => areBoardsEqual(this.solutionBoard, this.playerBoard);

   getBoardSize = () => this.playerBoard.getBoardSize();
} 
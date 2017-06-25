
import NewGameGenerator from './game-generating/NewGameGenerator';
import PlayerBoardCreator from './game-generating/PlayerBoardCreator';
import { areBoardsEqual } from './boards/boardUtils';

export default class GameEngine {
   constructor() {
      this.newGameGenerator = new NewGameGenerator();
      this.playerBoardCreator = new PlayerBoardCreator();
      this.newGame();   //TODO add default gameDifficulty
   }
   
   newGame(gameDifficulty) {
      this.solutionBoard = this.newGameGenerator.generateGame();
      this.playerBoard = this.playerBoardCreator.createFromGeneratedGame(this.solutionBoard, gameDifficulty);

      console.log("Solution:");
      this.solutionBoard.printToConsole();
      console.log("Player board (init):");
      this.playerBoard.printToConsole();
   }

   hint(row, column) {
      return this.solutionBoard.getCell(row, column);
   }

   getPlayerBoard() {
      return this.playerBoard;
   }

   setPlayerBoardCell(row, column, number) {
      this.playerBoard.setCell(row, column, number);
   }

   deletePlayerBoardCell(row, column) {
      this.playerBoard.deleteCell(row, column);
   }

   isGameSuccessfullySolved = () => areBoardsEqual(this.solutionBoard, this.playerBoard);
}

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
   }

   hint(row, column) {
      return this.solutionBoard.getCell(row, column);
   }

   getPlayerBoardCells() {
      return this.playerBoard;
   }

   setPlayerBoardCell(row, column, number) {
      if (!this.canBePlayerBoardCellModified(row, column))
         throw new Error(`This cell (${row}, ${column}) of player board cannot be modified.`);
      this.playerBoard.board.setCell(row, column, number);
   }

   deletePlayerBoardCell(row, column) {
      if (!this.canBePlayerBoardCellModified(row, column))
         throw new Error(`This cell (${row}, ${column}) of player board cannot be modified.`);
      this.playerBoard.board.deleteCell(row, column);
   }

   canBePlayerBoardCellModified(row, column) {
      const { mask } = this.playerBoard;
      return mask.findIndex(cellPosition => 
         cellPosition.row === row && cellPosition.column === column) === -1;
   }

   isGameSuccessfullySolved = () => areBoardsEqual(this.solutionBoard, this.playerBoard.board);
}
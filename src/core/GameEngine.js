
import NewGameGenerator from './game-generating/NewGameGenerator';
import PlayerBoardCreator from './game-generating/PlayerBoardCreator';
import Game from './Game';

export default class GameEngine {
   constructor() {
      this.newGameGenerator = new NewGameGenerator();
      this.playerBoardCreator = new PlayerBoardCreator();
   }

   static difficulty = {
      easy: "easy",
      medium: "medium",
      hard: "hard"
   };
   
   newGame(gameDifficulty) {
      const solutionBoard = this.newGameGenerator.generateGame();
      const playerBoard = this.playerBoardCreator.createFromGeneratedGame(solutionBoard, gameDifficulty);

      console.log("Solution:");
      solutionBoard.printToConsole();
      // console.log("Player board (init):");
      // playerBoard.printToConsole();

      return new Game(gameDifficulty, solutionBoard, playerBoard);
   }
}
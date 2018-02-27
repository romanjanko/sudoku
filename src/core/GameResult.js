export default class GameResult {
   constructor(player, difficulty, timeInSeconds, hints) {
      this.player = player;
      this.difficulty = difficulty;
      this.timeInSeconds = timeInSeconds;
      this.hints = hints;
   }

   compare(anotherGameResult) {
      return GameResult.compare(this, anotherGameResult);
   }

   /* returns 
         -1 if A is better than B,
          0 if A and B are equal,
          1 if B is better than A. */
   static compare(gameResultA, gameResultB) {
      // TODO add difficulty
      if (gameResultA.hints < gameResultB.hints)
         return -1;
      else if (gameResultA.hints > gameResultB.hints)
         return 1;
      
      if (gameResultA.timeInSeconds < gameResultB.timeInSeconds)
         return -1;
      else if (gameResultA.timeInSeconds > gameResultB.timeInSeconds)
         return 1;

      return 0;
   }
}
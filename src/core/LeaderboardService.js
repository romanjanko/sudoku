import Game from './Game';

export default class LeaderboardService {
   constructor() {
      this.localStorageKeyName = "leaderboard_results";
      this.limit = 3; // only top 3 best results for each game difficulty are saved
      this.bestResults = this.getBestResults();
   }

   initBestResults() {
      const newResults = {};
      const difficulties = Game.difficulty;

      for (const difficulty in difficulties) {
         if (difficulties.hasOwnProperty(difficulty)) {
            newResults[difficulty] = [];
         }
      }

      return newResults;
   }
   
   getBestResults() {
      const results = localStorage.getItem(this.localStorageKeyName);

      if (results)
         return JSON.parse(results);

      return this.initBestResults();
   }

   saveBestResults(results) {
      localStorage.setItem(this.localStorageKeyName, JSON.stringify(results));
   }

   tryAddResult(newGameResult) {
      // TODO handle different players with same results
      const bestForCurrentDifficulty = this.results[newGameResult.difficulty] || [];
      const newBestForCurrentDifficulty = [];

      for (let i = 0; i < bestForCurrentDifficulty.length; i++) {
         const tempGameResult = bestForCurrentDifficulty[i][0];

         if (!tempGameResult)
            continue;

         const comp = newGameResult.compare(tempGameResult);

         if (comp < 0) {
            newBestForCurrentDifficulty.push([newGameResult]);
            newBestForCurrentDifficulty.push(bestForCurrentDifficulty[i]);
            break;
         }
         else if (comp === 0) {
            newBestForCurrentDifficulty.push([...bestForCurrentDifficulty[i], newGameResult]);
            break;
         }
         else {
            newBestForCurrentDifficulty.push(bestForCurrentDifficulty[i]);
         }
      }
      
      if (newBestForCurrentDifficulty.length === 0)
         newBestForCurrentDifficulty.push([newGameResult]);
      
      this.results[newGameResult.difficulty] = newBestForCurrentDifficulty.slice(0, this.limit);
      this.saveBestResults(this.results);
   }
}
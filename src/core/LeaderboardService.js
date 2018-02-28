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
      const bestForCurrentDifficulty = this.bestResults[newGameResult.difficulty] || [];
      const newBestForCurrentDifficulty = [];
      let place = 0;
      let added = false;

      for (let i = 0; i < bestForCurrentDifficulty.length; i++) {
         if (added) {
            newBestForCurrentDifficulty.push(bestForCurrentDifficulty[i]);
            continue;
         }

         const tempGameResult = bestForCurrentDifficulty[i][0];

         if (!tempGameResult)
            continue;

         const comp = newGameResult.compare(tempGameResult);

         if (comp < 0) {
            added = true;
            place = i + 1;
            newBestForCurrentDifficulty.push([newGameResult]);
            newBestForCurrentDifficulty.push(bestForCurrentDifficulty[i]);
         }
         else if (comp === 0) {
            added = true;
            place = i + 1;
            newBestForCurrentDifficulty.push([...bestForCurrentDifficulty[i], newGameResult]);
         }
         else {
            newBestForCurrentDifficulty.push(bestForCurrentDifficulty[i]);
         }
      }

      if (!added) {
         added = true;
         place = newBestForCurrentDifficulty.length + 1;
         newBestForCurrentDifficulty.push([newGameResult]);
      }
      
      this.bestResults[newGameResult.difficulty] = newBestForCurrentDifficulty.slice(0, this.limit);
      this.saveBestResults(this.bestResults);

      return {
         place: 0 < place && place <= this.limit ? place : null,
         leaderboard: this.bestResults
      };
   }
}
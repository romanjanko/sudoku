import { createStore, applyMiddleware } from 'redux';

import boardReducer from './components/board/reducer';
import GameEngine from '../core/GameEngine';
import gameEngineMiddleware from './gameEngineMiddleware';
import LeaderboardService from '../core/LeaderboardService';

const gameEngine = new GameEngine();
const leaderboardService = new LeaderboardService();

const initialState = {
   boardSize: 0,
   boardCells: null,
   selectedBoardCell: null,
   player: null,
   difficulty: null,
   time: 0, // seconds that has elapsed since the game started
   hints: {
      counter: 0,
      activatedByBoardCell: null
   },
   finished: false,
   leaderboard: leaderboardService.getBestResults(),
   place: null // displays position on leaderboard when a game is finished
}

const middleware = [
   gameEngineMiddleware(gameEngine, leaderboardService)
]

export default createStore(
   boardReducer, 
   initialState, 
   applyMiddleware(...middleware)
);
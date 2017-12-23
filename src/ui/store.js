import { createStore, applyMiddleware } from 'redux';

import boardReducer from './board/reducer';
import GameEngine from '../core/GameEngine';
import gameEngineMiddleware from './gameEngineMiddleware';

const gameEngine = new GameEngine();

const initialState = {
   boardSize: gameEngine.getBoardSize(),
   boardCells: gameEngine.getPlayerBoardCells(),
   player: null,
   difficulty: null,
   time: null,
   hints: null
}

const middleware = [
   gameEngineMiddleware(gameEngine)
]

export default createStore(
   boardReducer, 
   initialState, 
   applyMiddleware(...middleware)
);
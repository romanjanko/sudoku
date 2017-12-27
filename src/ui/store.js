import { createStore, applyMiddleware } from 'redux';

import boardReducer from './components/board/reducer';
import GameEngine from '../core/GameEngine';
import gameEngineMiddleware from './gameEngineMiddleware';

const gameEngine = new GameEngine();

const initialState = {
   boardSize: 0,
   boardCells: null,
   player: null,
   difficulty: null,
   time: 0,
   hints: 0,
   finished: false
}

const middleware = [
   gameEngineMiddleware(gameEngine)
]

export default createStore(
   boardReducer, 
   initialState, 
   applyMiddleware(...middleware)
);
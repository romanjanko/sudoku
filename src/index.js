import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import RestrictedBoard from './core/boards/RestrictedBoard';
import NewGameGenerator from './core/game-generating/NewGameGenerator';
import PlayerBoardCreator from './core/game-generating/PlayerBoardCreator';
import GameEngine from './core/GameEngine';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const gameEngine = new GameEngine();
gameEngine.newGame();
gameEngine.getPlayerBoardCells().board.printToConsole();
gameEngine.setPlayerBoardCell(1, 1, gameEngine.hint(1, 1));
gameEngine.getPlayerBoardCells().board.printToConsole();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

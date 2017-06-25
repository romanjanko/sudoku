import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import GameEngine from './core/GameEngine';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const gameEngine = new GameEngine();
// gameEngine.newGame();
gameEngine.setPlayerBoardCell(1, 1, gameEngine.hint(1, 1));
gameEngine.getPlayerBoard().printToConsole();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

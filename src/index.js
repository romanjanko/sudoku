import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import RestrictedBoard from './core/RestrictedBoard';
import NewGameGenerator from './core/NewGameGenerator';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const board = new RestrictedBoard();
board.setCell(1, 1, 3);
board.setCell(1, 2, 5);
board.setCell(2, 1, 9);
console.log(board.getAllValidNumbersForCell(1, 3));
board.printToConsole();

const gameGenerator = new NewGameGenerator();
gameGenerator.generateGame().newGameSolution.printToConsole();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import Board from './core/board';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const board = new Board();
board.setCell(1, 1, 3);
board.setCell(1, 2, 5);
board.setCell(2, 1, 9);
console.log(board.getAllPossibleNumbersForEmptyCell(1, 3));
board.printToConsole();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

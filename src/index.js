import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import RestrictedBoard from './core/boards/RestrictedBoard';
import NewGameGenerator from './core/game-generating/NewGameGenerator';
import PlayerBoardCreator from './core/game-generating/PlayerBoardCreator';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const board = new RestrictedBoard();
board.setCell(1, 1, 3);
board.setCell(1, 2, 5);
board.setCell(2, 1, 9);
console.log(board.getAllValidNumbersForCell(1, 3));
board.printToConsole();

const gameGenerator = new NewGameGenerator();
const newGame = gameGenerator.generateGame();
newGame.printToConsole();

const playerBoardCreator = new PlayerBoardCreator();
const playerBoard = playerBoardCreator.createFromGeneratedGame(newGame);
playerBoard.printToConsole();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

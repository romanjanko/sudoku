import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';
import GameEngine from './core/GameEngine';

const gameEngine = new GameEngine();

const initialState = {
   boardCells: gameEngine.getPlayerBoardCells()
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
   <Provider store={createStoreWithMiddleware(reducers, initialState)}>
      <App />
   </Provider>
   , document.querySelector('.container'));

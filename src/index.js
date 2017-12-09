import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import '../style/style.scss';

import App from './components/App';
import reducers from './reducers';
import GameEngine from './core/GameEngine';
import GameEngineMiddleware from './middleware/GameEngineMiddleware';

const gameEngine = new GameEngine();

const initialState = {
   boardCells: gameEngine.getPlayerBoardCells()
}

const createStoreWithMiddleware = applyMiddleware(GameEngineMiddleware(gameEngine))(createStore);

ReactDOM.render(
   <Provider store={createStoreWithMiddleware(reducers, initialState)}>
      <App />
   </Provider>
   , document.querySelector('.container'));

import { combineReducers } from 'redux';

import boardCellsReducer from './BoardCellsReducer'

const rootReducer = combineReducers({
  boardSize: (state = 9) => state,
  boardCells: boardCellsReducer
});

export default rootReducer;

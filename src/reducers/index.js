import { combineReducers } from 'redux';

import boardCellsReducer from './BoardCellsReducer'

const rootReducer = combineReducers({
  boardCells: boardCellsReducer
});

export default rootReducer;

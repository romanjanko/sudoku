import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  boardCells: (state = []) => state
});

export default rootReducer;

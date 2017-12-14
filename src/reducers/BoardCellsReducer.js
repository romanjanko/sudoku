import findIndex from 'lodash/array/findIndex';

import {
   SET_CELL_EVENT,
   DELETE_CELL_EVENT 
} from '../actions';

const findCellIndex = (cells, row, column) => 
   findIndex(cells, cell => cell.row === row && cell.column === column);

export default function boardCellsReducer(state = [], action) {
   switch (action.type) {
      case SET_CELL_EVENT: {
         const { row, column, value } = action;
         const index = findCellIndex(state, row, column);

         return [
            ...state.slice(0, index),
            { row, column, value, readOnly: false },
            ...state.slice(index + 1)
         ];
      }
      case DELETE_CELL_EVENT: {
         const { row, column } = action;
         const index = findCellIndex(state, row, column);

         return [
            ...state.slice(0, index),
            { row, column, value: undefined, readOnly: false },
            ...state.slice(index + 1)
         ];
      }
   }
   return state;
}
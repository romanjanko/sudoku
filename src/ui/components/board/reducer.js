import findIndex from 'lodash/array/findIndex';

import {
   SET_CELL_EVENT,
   DELETE_CELL_EVENT,
   GAME_FINISHED_EVENT,
   GIVE_HINT_EVENT,
   START_NEW_GAME_EVENT,
   INCREMENT_TIME_EVENT
} from './actions';

const findCellIndex = (cells, row, column) => 
   findIndex(cells, cell => cell.row === row && cell.column === column);

export default function boardReducer(state = {}, action) {
   switch (action.type) {
      case START_NEW_GAME_EVENT: {
         const { boardSize, boardCells, player, difficulty } = action;
         
         return {
            boardSize,
            boardCells,
            player: player && player.length > 0 ? player : "Anonymous player",
            difficulty,
            time: 0,
            hints: 0,
            finished: false
         };
      }
      case SET_CELL_EVENT: {
         const { row, column, value } = action;
         const index = findCellIndex(state.boardCells, row, column);
         const boardCells = [
            ...state.boardCells.slice(0, index),
            { row, column, value, readOnly: false },
            ...state.boardCells.slice(index + 1)
         ];

         return {
            ...state,
            boardCells
         };
      }
      case DELETE_CELL_EVENT: {
         const { row, column } = action;
         const index = findCellIndex(state.boardCells, row, column);
         const boardCells = [
            ...state.boardCells.slice(0, index),
            { row, column, value: undefined, readOnly: false },
            ...state.boardCells.slice(index + 1)
         ];

         return {
            ...state,
            boardCells
         };
      }
      case GAME_FINISHED_EVENT: {
         return {
            ...state,
            boardSize: 0,
            boardCells: null,
            finished: true
         };
      }
      case GIVE_HINT_EVENT: {
         return {
            ...state,
            hints: state.hints + 1
         };
      }
      case INCREMENT_TIME_EVENT: {
         return {
            ...state,
            time: state.time + 1
         };
      }
   }
   return state;
}
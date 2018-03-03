import findIndex from 'lodash/array/findIndex';

import {
   SET_CELL_EVENT,
   DELETE_CELL_EVENT,
   GAME_FINISHED_EVENT,
   GIVE_HINT_EVENT,
   START_NEW_GAME_EVENT,
   INCREMENT_TIME_EVENT,
   SELECT_CELL_EVENT,
   UNSELECT_CELL_EVENT,
   DISABLE_HINT_FOR_UNSELECTED_CELL_EVENT
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
            selectedBoardCell: null,
            player: player && player.length > 0 ? player : "Anonymous player",
            difficulty,
            time: 0,
            hints: {
               counter: 0,
               activatedByBoardCell: null
            },
            finished: false,
            place: null
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
         const { place, leaderboard } = action;
         return {
            ...state,
            boardSize: 0,
            boardCells: null,
            finished: true,
            place,
            leaderboard
         };
      }
      case GIVE_HINT_EVENT: {
         return {
            ...state,
            hints: {
               ...state.hints,
               counter: state.hints.counter + 1
            }
         };
      }
      case INCREMENT_TIME_EVENT: {
         return {
            ...state,
            time: state.time + 1
         };
      }
      case SELECT_CELL_EVENT: {
         const { row, column } = action;

         return {
            ...state,
            selectedBoardCell: { row, column },
            hints: {
               ...state.hints,
               activatedByBoardCell: { row, column }
            }
         };
      }
      case UNSELECT_CELL_EVENT: {
         const { row, column } = action;

         if (state.selectedBoardCell.row === row && state.selectedBoardCell.column === column) {
            return {
               ...state,
               selectedBoardCell: null
            };
         }
      }
      case DISABLE_HINT_FOR_UNSELECTED_CELL_EVENT: {
         const { row, column } = action;
         const currentCell = state.hints.activatedByBoardCell;

         if (currentCell.row === row && currentCell.column === column) {
            return {
               ...state,
               hints: {
                  ...state.hints,
                  activatedByBoardCell: null
               }
            };
         }
      }
   }

   return state;
}
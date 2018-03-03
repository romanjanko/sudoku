
//TODO better exports types and actions only
export const NEW_GAME_EVENT = 'NEW_GAME_EVENT';
export const START_NEW_GAME_EVENT = 'START_NEW_GAME_EVENT';
export const GAME_FINISHED_EVENT = 'GAME_FINISHED_EVENT';

export const GIVE_HINT_EVENT = 'GIVE_HINT_EVENT';
export const DISABLE_HINT_FOR_UNSELECTED_CELL_EVENT = 'DISABLE_HINT_FOR_UNSELECTED_CELL_EVENT';
export const SELECT_CELL_EVENT = 'SELECT_CELL_EVENT';
export const UNSELECT_CELL_EVENT = 'UNSELECT_CELL_EVENT';
export const SET_CELL_EVENT = 'SET_CELL_EVENT';
export const DELETE_CELL_EVENT = 'DELETE_CELL_EVENT';

export const INCREMENT_TIME_EVENT = 'INCREMENT_TIME_EVENT';

export const newGame = (player, difficulty) => ({
   type: NEW_GAME_EVENT,
   player,
   difficulty
});

export const startNewGame = (player, difficulty, boardSize, boardCells) => ({
   type: START_NEW_GAME_EVENT,
   player,
   difficulty,
   boardSize,
   boardCells
});

export const gameFinished = (place, leaderboard) => ({
   type: GAME_FINISHED_EVENT,
   place,
   leaderboard
});

export const giveHint = (row, column) => ({
   type: GIVE_HINT_EVENT,
   row,
   column
});

export const disableHintForUnselectedCell = (row, column) => ({
   type: DISABLE_HINT_FOR_UNSELECTED_CELL_EVENT,
   row,
   column
});

export const selectCell = (row, column) => ({
   type: SELECT_CELL_EVENT,
   row, 
   column
});

export const unselectCell = (row, column) => ({
   type: UNSELECT_CELL_EVENT,
   row, 
   column
});

export const setCell = (row, column, value) => ({
   type: SET_CELL_EVENT,
   row, 
   column,
   value
});

export const deleteCell = (row, column) => ({
   type: DELETE_CELL_EVENT,
   row, 
   column
});

export const incrementTime = () => ({
   type: INCREMENT_TIME_EVENT
});



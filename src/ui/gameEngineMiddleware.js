
import { 
   NEW_GAME_EVENT,
   GIVE_HINT_EVENT,
   SET_CELL_EVENT, 
   DELETE_CELL_EVENT,
   gameFinished,
   setCell } from './board/actions';

const gameEngineMiddleware = gameEngine => store => next => action => {
   console.log("gameEngineMiddleware", action);

   switch(action.type) {
      case NEW_GAME_EVENT: {
         gameEngine.newGame();
         break;
      }
      case GIVE_HINT_EVENT: {
         const { row, column } = action;
         const value = gameEngine.hint(row, column);
         store.dispatch(setCell(row, column, value));
         break;
      }
      case SET_CELL_EVENT: {
         const { row, column, value } = action;
         gameEngine.setPlayerBoardCell(row, column, value);
         if (gameEngine.isGameSuccessfullySolved())
            store.dispatch(gameFinished());
         break;
      }
      case DELETE_CELL_EVENT: {
         const { row, column } = action;
         gameEngine.deletePlayerBoardCell(row, column);
         break;
      }
   }

   return next(action);
};

export default gameEngineMiddleware;
import { BrowserHistory } from 'react-router-dom';

import { 
   NEW_GAME_EVENT,
   GIVE_HINT_EVENT,
   SET_CELL_EVENT, 
   DELETE_CELL_EVENT,
   selectCell,
   gameFinished,
   setCell,
   startNewGame,
   GAME_FINISHED_EVENT
} from './components/board/actions';
import GameResult from '../core/GameResult';

let game = null;

const gameEngineMiddleware = (gameEngine, leaderboardService) => store => next => action => {
   // console.log("gameEngineMiddleware", action);

   switch(action.type) {
      case NEW_GAME_EVENT: {
         const { player, difficulty } = action;
         game = gameEngine.newGame(difficulty);

         store.dispatch(startNewGame(player, difficulty, 
            game.getBoardSize(), game.getPlayerBoardCells()));
         break;
      }
      case GIVE_HINT_EVENT: {
         if (!game) return;

         next(action);

         const { row, column } = action;
         const value = game.hint(row, column);
         store.dispatch(setCell(row, column, value));

         return;
      }
      case SET_CELL_EVENT: {
         if (!game) return;

         const { row, column, value } = action;
         game.setPlayerBoardCell(row, column, value);

         if (game.isGameSuccessfullySolved()) {
            const { player, difficulty, time, hints } = store.getState();
            const res = leaderboardService.tryAddResult(
               new GameResult(player, difficulty, time, hints.counter));
            store.dispatch(gameFinished(res.place));
         }
         break;
      }
      case DELETE_CELL_EVENT: {
         if (!game) return;

         const { row, column } = action;
         game.deletePlayerBoardCell(row, column);
         break;
      }
      case GAME_FINISHED_EVENT: {
         break;
      }
   }

   return next(action);
};

export default gameEngineMiddleware;
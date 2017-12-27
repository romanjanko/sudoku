import React from 'react';

import Difficulty from '../../components/board/gauges/Difficulty';
import Hints from '../../components/board/gauges/Hints';
import Player from '../../components/board/gauges/Player';
import Time from '../../components/board/gauges/Time';
import ContinueButton from '../../components/board/buttons/ContinueButton';

const GamePausedPage = () => (
   <div className="board-page-layout">
      <div className="board">
         <div className="game-paused-page">
            <div className="game-paused-page__text">
               Your game is paused right now.
            </div>
            <div className="game-paused-page__button">
               <ContinueButton />
            </div>
         </div>
      </div>
      <div className="board-page-layout__right">
         <div className="board-page-layout__line board-page-layout__line--gauge">
            <Player />
         </div>
         <div className="board-page-layout__line board-page-layout__line--gauge">
            <Time />
         </div>
         <div className="board-page-layout__line board-page-layout__line--gauge">
            <Difficulty />
         </div>
         <div className="board-page-layout__line board-page-layout__line--gauge">
            <Hints />
         </div>
      </div>
   </div>
);

export default GamePausedPage;
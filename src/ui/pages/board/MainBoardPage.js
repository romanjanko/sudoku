import React, { Component } from 'react';
import { connect } from 'react-redux';
import Media from "react-media"

import Board from '../../components/board/Board';
import NewGameButton from '../../components/board/buttons/NewGameButton';
import PauseButton from '../../components/board/buttons/PauseButton';
import HintButton from '../../components/board/buttons/HintButton';

import Difficulty from '../../components/board/gauges/Difficulty';
import Hints from '../../components/board/gauges/Hints';
import Player from '../../components/board/gauges/Player';
import Time from '../../components/board/gauges/Time';

class MainBoardPage extends Component {
   static propTypes = {
      history: React.PropTypes.object.isRequired,
      notStarted: React.PropTypes.bool.isRequired,
      finished: React.PropTypes.bool.isRequired
   }
   
   componentWillMount() {
      const { history, notStarted } = this.props;

      if (notStarted)
         history.push("/new-game");
   }

   componentDidUpdate() {
      const { history, finished } = this.props;

      //TODO going back to / from /game-finished causing console log error.
      if (finished)
         history.push("/game-finished");
   }

   renderButtons() {
      return (
         <div className="board-page-layout__buttons">
            <div className="board-page-layout__item board-page-layout__line--button">
               <NewGameButton />
            </div>
            <div className="board-page-layout__line board-page-layout__line--button">
               <PauseButton />
            </div>
         </div>
      );
   }

   renderBoard() {
      return (
         <div className="board-page-layout__board">
            <div className="board">
               <Board />
            </div>
         </div>
      );
   }

   renderGauges() {
      return (
         <div className="board-page-layout__gauges">
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
            <div className="board-page-layout__hint-button">
               <HintButton />
            </div>
         </div>
      );
   }

   render() {
      return (
         <div>
            <Media query={{ minWidth: 901, maxWidth: 1200 }}>
               {matches =>
                  matches ? (
                     <div className="board-page-layout">
                        {this.renderBoard()}
                        <div className="board-page-layout__buttons-and-gauges">
                           {this.renderButtons()}
                           {this.renderGauges()}
                        </div>
                     </div>
                  ) : (
                     <div className="board-page-layout">
                        {this.renderButtons()}
                        {this.renderBoard()}
                        {this.renderGauges()}
                     </div>
                  )
               }
            </Media>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   notStarted: !state.boardCells,
   finished: state.finished
});

export default connect(mapStateToProps)(MainBoardPage);
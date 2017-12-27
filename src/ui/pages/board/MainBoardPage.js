import React, { Component } from 'react';
import { connect } from 'react-redux';

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

   render() {
      return (
         <div className="board-page-layout">
            <div className="board-page-layout__left">
               <div className="board-page-layout__element">
                  <NewGameButton />
               </div>
               <div className="board-page-layout__element">
                  <PauseButton />
               </div>
            </div>
            <div className="board">
               <Board />
            </div>
            <div className="board-page-layout__right">
               <div className="board-page-layout__element">
                  <Player />
               </div>
               <div className="board-page-layout__element">
                  <Time />
               </div>
               <div className="board-page-layout__element">
                  <Difficulty />
               </div>
               <div className="board-page-layout__element">
                  <Hints />
                  <HintButton />
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   notStarted: !state.boardCells,
   finished: state.finished
});

export default connect(mapStateToProps)(MainBoardPage);
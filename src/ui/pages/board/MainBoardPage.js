import React, { Component } from 'react';
import { connect } from 'react-redux';

import Board from '../../components/board/Board';
import NewGameButton from '../../components/board/NewGameButton';
import PauseButton from '../../components/board/PauseButton';
import HintButton from '../../components/board/HintButton';

class MainBoardPage extends Component {
   componentDidUpdate() {
      const { history } = this.props;

      //TODO going back to / from /game-finished causing console log error.
      if (this.props.finished)
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
                  Player
               </div>
               <div className="board-page-layout__element">
                  Time
               </div>
               <div className="board-page-layout__element">
                  Easy
               </div>
               <div className="board-page-layout__element">
                  Hints
                  <HintButton />
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   finished: state.finished
});

export default connect(mapStateToProps)(MainBoardPage);
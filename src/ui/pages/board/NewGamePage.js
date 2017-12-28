import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NewGameForm from '../../components/board/NewGameForm';
import { newGame } from '../../components/board/actions';

class NewGamePage extends Component {
   static propTypes = {
      history: React.PropTypes.object.isRequired,
      newGame: React.PropTypes.func.isRequired
   }

   constructor(props) {
      super(props);

      this.handleNewGameFormSubmit = this.handleNewGameFormSubmit.bind(this);
   }

   handleNewGameFormSubmit({ player, difficulty }) {
      const { newGame, history } = this.props;

      newGame(player, difficulty);
      history.push("/");
   }

   render() {
      return (
         <div className="board-page-layout">
            <div className="board">
               <div className="new-game-page">
                  <NewGameForm onSubmit={this.handleNewGameFormSubmit} />
               </div>
            </div>
         </div>
      );
   }
}

const mapDispatchToProps = dispatch => 
   bindActionCreators({ newGame }, dispatch);

export default connect(null, mapDispatchToProps)(NewGamePage);
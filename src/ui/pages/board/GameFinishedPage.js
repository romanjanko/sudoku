import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

class GameFinishedPage extends PureComponent {
   static propTypes = {
      history: React.PropTypes.object.isRequired,
      player: React.PropTypes.string.isRequired,
      difficulty: React.PropTypes.string.isRequired,
      time: React.PropTypes.number.isRequired,
      hints: React.PropTypes.number.isRequired,
      notStarted: React.PropTypes.bool.isRequired
   }
   
   componentWillMount() {
      const { history, notStarted } = this.props;

      if (notStarted)
         history.push("/new-game");
   }

   render() {
      const { player, difficulty, time, hints, place } = this.props;

      return (
         <div className="game-finished-page">
            <div className="game-finished-page__heading">
               Congratulations, {player}!
            </div>
            <div className="game-finished-page__text">
               You finished your game 
               in {numeral(time).format("00:00:00")} with
               {hints === 0 && " no hint used"}
               {hints === 1 && " only one hint used"}
               {hints >= 2 && ` ${hints} hints used`}
               .
               The game difficulty was {difficulty}.
            </div>
            {place &&
               <div className="game-finished-page__text">
                  You are 
                  {place === 1 && " 1st"}
                  {place === 2 && " 2nd"}
                  {place === 3 && " 3rd"}
                  {place >= 4 && ` ${place}th`} on the leaderboard!
               </div>
            }
            <div className="game-finished-page__buttons">
               <div className="button game-finished-page__button">
                  <Link to="/menu/leaderboard" className="button__link">Leaderboard</Link>
               </div>
               <div className="button game-finished-page__button">
                  <Link to="/" className="button__link">New Game</Link>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   player: state.player,
   difficulty: state.difficulty,
   time: state.time,
   hints: state.hints.counter,
   place: state.place,
   notStarted: !state.boardCells && !state.finished,
});

export default connect(mapStateToProps)(GameFinishedPage);
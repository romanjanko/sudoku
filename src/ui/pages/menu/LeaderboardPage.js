import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';

import Game from '../../../core/Game';

class LeaderboardPage extends PureComponent {
   static propTypes = {
      leaderboard: React.PropTypes.object.isRequired
   }

   static defaultProps = {
      leaderboard: {}
   }

   constructor(props) {
      super(props);

      this.state = {
         difficulty: Game.difficulty.easy
      };

      this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
   }
   
   handleDifficultyChange(event) {
      this.setState({
         difficulty: event.target.value
      });
   }

   renderDifficultySelection() {
      const { difficulty } = this.state;

      return (
         <div className="center">
            <div className="radio">
               <input 
                     type="radio" 
                     className="radio__radio-input"
                     id="easyDifficulty" 
                     name="difficulty" 
                     value={Game.difficulty.easy}
                     checked={difficulty === Game.difficulty.easy}
                     onChange={this.handleDifficultyChange} />
               <label htmlFor="easyDifficulty" className="radio__radio-label">
                     <span className="radio__radio-button radio__radio-button"/>
                     Easy
               </label>
            </div>

            <div className="radio">
               <input 
                     type="radio" 
                     className="radio__radio-input"
                     id="mediumDifficulty" 
                     name="difficulty" 
                     value={Game.difficulty.medium}
                     checked={difficulty === Game.difficulty.medium}
                     onChange={this.handleDifficultyChange} />
               <label htmlFor="mediumDifficulty" className="radio__radio-label">
                     <span className="radio__radio-button radio__radio-button"/>
                     Medium
               </label>
            </div>

            <div className="radio">
               <input 
                     type="radio" 
                     className="radio__radio-input"
                     id="hardDifficulty" 
                     name="difficulty" 
                     value={Game.difficulty.hard}
                     checked={difficulty === Game.difficulty.hard}
                     onChange={this.handleDifficultyChange} />
               <label htmlFor="hardDifficulty" className="radio__radio-label">
                     <span className="radio__radio-button radio__radio-button"/>
                     Hard difficulty
               </label>
            </div>
         </div>
      );
   }

   renderLeaderboard() {
      const { leaderboard } = this.props;
      const { difficulty } = this.state;
      const results = leaderboard[difficulty];

      if (!results || results.length === 0)
         return <div className="margin-top-small center">No results</div>;

      return (
         <div className="margin-top-small center">
            <table>
               <thead>
                  <tr>
                     <td>Place</td>
                     <td>Player</td>
                     <td>Time</td>
                     <td>Hints</td>
                  </tr>
               </thead>
               <tbody>
                  {results.map((gameResultsPerPlace, place) => {
                     return gameResultsPerPlace.map((gameResult, index) => (
                        <tr>
                           <td>{index === 0 && place+1}</td>
                           <td>{gameResult.player}</td>
                           <td>{index === 0 && numeral(gameResult.timeInSeconds).format("00:00:00")}</td>
                           <td>{index === 0 && gameResult.hints}</td>
                        </tr>
                     ))
                  })}
               </tbody>
            </table>
         </div>
      );
   }

   render() {
      return (
         <div className="main-menu__page">
            <div className="main-menu__heading">
               <Link to="/menu" className="main-menu__arrow-link"><i className="fa fa-arrow-left" /></Link>
               <span>Leaderboard</span>
            </div>
            <div className="main-menu__text-block">
               {this.renderDifficultySelection()}
            </div>
            <div className="main-menu__text-block">
               {this.renderLeaderboard()}
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   leaderboard: state.leaderboard
});

export default connect(mapStateToProps)(LeaderboardPage);
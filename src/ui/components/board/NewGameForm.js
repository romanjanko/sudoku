import React, { Component } from 'react';
import GameEngine from '../../../core/GameEngine';

export default class NewGameForm extends Component {
   static propTypes = {
      onSubmit: React.PropTypes.func
   }

   constructor(props) {
      super(props);

      this.state = {
         player: "",
         difficulty: GameEngine.difficulty.easy
      };

      this.handlePlayerChange = this.handlePlayerChange.bind(this);
      this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handlePlayerChange(event) {
      this.setState({
         player: event.target.value
      });
   }

   handleDifficultyChange(event) {
      this.setState({
         difficulty: event.target.value
      });
   }

   handleSubmit(event) {
      event.preventDefault();
      const { onSubmit } = this.props;

      if (onSubmit)
         onSubmit(this.state);
   }

   render() {
      const { player, difficulty } = this.state;

      return (
         <form onSubmit={this.handleSubmit}>
            <div>
               <label htmlFor="player">Player name:</label>
               <input type="text" id="player" value={player} onChange={this.handlePlayerChange} />
            </div>
            <div>
               <input 
                  type="radio" 
                  id="easyDifficulty" 
                  name="difficulty" 
                  value={GameEngine.difficulty.easy}
                  checked={difficulty === GameEngine.difficulty.easy}
                  onChange={this.handleDifficultyChange} />
               <label htmlFor="easyDifficulty">Easy</label>

               <input 
                  type="radio" 
                  id="mediumDifficulty" 
                  name="difficulty" 
                  value={GameEngine.difficulty.medium}
                  checked={difficulty === GameEngine.difficulty.medium}
                  onChange={this.handleDifficultyChange} />
               <label htmlFor="mediumDifficulty">Medium</label>
               
               <input 
                  type="radio" 
                  id="hardDifficulty" 
                  name="difficulty" 
                  value={GameEngine.difficulty.hard}
                  checked={difficulty === GameEngine.difficulty.hard}
                  onChange={this.handleDifficultyChange} />
               <label htmlFor="hardDifficulty">Hard</label>
            </div>
            <div>
               <button type="submit">Start new game</button>
            </div>
         </form>
      );
   }
}
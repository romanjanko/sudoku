import React, { Component } from 'react';
import GameEngine from '../../../core/GameEngine';
import BackButton from './buttons/BackButton';

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
      //TODO get rid of autocomplete on player input
      return (
         <form onSubmit={this.handleSubmit} className="new-game-form">
            <div className="new-game-form__row">
               <label htmlFor="player" className="new-game-form__text-label">Player name:</label>
               <input 
                  type="text" 
                  className="new-game-form__text-input"
                  id="player" 
                  value={player} 
                  onChange={this.handlePlayerChange}
                  autoFocus={true} />
            </div>
            <div className="new-game-form__row">
               <div className="radio">
                  <input 
                        type="radio" 
                        className="radio__radio-input"
                        id="easyDifficulty" 
                        name="difficulty" 
                        value={GameEngine.difficulty.easy}
                        checked={difficulty === GameEngine.difficulty.easy}
                        onChange={this.handleDifficultyChange} />
                  <label htmlFor="easyDifficulty" className="radio__radio-label">
                        <span className="radio__radio-button radio__radio-button--white"/>
                        Easy
                  </label>
               </div>

               <div className="radio">
                  <input 
                        type="radio" 
                        className="radio__radio-input"
                        id="mediumDifficulty" 
                        name="difficulty" 
                        value={GameEngine.difficulty.medium}
                        checked={difficulty === GameEngine.difficulty.medium}
                        onChange={this.handleDifficultyChange} />
                  <label htmlFor="mediumDifficulty" className="radio__radio-label">
                        <span className="radio__radio-button radio__radio-button--white"/>
                        Medium
                  </label>
               </div>

               <div className="radio">
                  <input 
                        type="radio" 
                        className="radio__radio-input"
                        id="hardDifficulty" 
                        name="difficulty" 
                        value={GameEngine.difficulty.hard}
                        checked={difficulty === GameEngine.difficulty.hard}
                        onChange={this.handleDifficultyChange} />
                  <label htmlFor="hardDifficulty" className="radio__radio-label">
                        <span className="radio__radio-button radio__radio-button--white"/>
                        Hard difficulty
                  </label>
               </div>
            </div>
            <div className="new-game-form__row">
               <div className="new-game-form__button">
                  <BackButton />
               </div>
               <div className="new-game-form__button">
                  <div className="button">
                        <button type="submit" className="button__button">Start new game</button>
                  </div>
               </div>
            </div>
         </form>
      );
   }
}
import React from 'react';
import { connect } from 'react-redux';

import GameEngine from '../../../../core/GameEngine';

const Difficulty = ({ difficulty }) => (
   <div className="gauge">
      <span className="gauge__icon">
         <i className="fas fa-signal" />
      </span>
      {difficulty === GameEngine.difficulty.easy && <span>Easy</span>}
      {difficulty === GameEngine.difficulty.medium && <span>Medium</span>}
      {difficulty === GameEngine.difficulty.hard && <span>Hard</span>}
   </div>
);

Difficulty.propTypes = {
   difficulty: React.PropTypes.string.isRequired
};

const mapStateToProps = state => ({
   difficulty: state.difficulty
});

export default connect(mapStateToProps)(Difficulty);
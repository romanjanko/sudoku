import React from 'react';
import { connect } from 'react-redux';

import Game from '../../../../core/Game';

const Difficulty = ({ difficulty }) => (
   <div className="gauge">
      <span className="gauge__icon">
         <i className="fas fa-signal" />
      </span>
      {difficulty === Game.difficulty.easy && <span>Easy</span>}
      {difficulty === Game.difficulty.medium && <span>Medium</span>}
      {difficulty === Game.difficulty.hard && <span>Hard</span>}
   </div>
);

Difficulty.propTypes = {
   difficulty: React.PropTypes.string.isRequired
};

const mapStateToProps = state => ({
   difficulty: state.difficulty
});

export default connect(mapStateToProps)(Difficulty);
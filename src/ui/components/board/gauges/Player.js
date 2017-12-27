import React from 'react';
import { connect } from 'react-redux';

const Player = ({ player }) => (
   <div>
      <span className="padding-right-small">
         <i className="fas fa-user" />
      </span>
      <span>{player}</span>
   </div>
);

Player.propTypes = {
   player: React.PropTypes.string.isRequired
};

const mapStateToProps = state => ({
   player: state.player
});

export default connect(mapStateToProps)(Player);
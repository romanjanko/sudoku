import React from 'react';
import { connect } from 'react-redux';

const Player = ({ player }) => (
   <div>
      <span className="padding-right-small">
         <i className="fas fa-user" />
      </span>
      <span>{player && player.length > 0 ? player : "Anonymous player"}</span>
   </div>
);

Player.propTypes = {
   player: React.PropTypes.string.isRequired
};

const mapStateToProps = state => ({
   player: state.player
});

export default connect(mapStateToProps)(Player);
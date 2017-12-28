import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const BackButton = ({ gameStarted }) => {
   if (!gameStarted)
      return null;

   return (
      <div className="button">
         <Link to="/" className="button__link">Back</Link>
      </div>
   );
};

BackButton.propTypes = {
   gameStarted: React.PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
   gameStarted: !!state.boardCells
});

export default connect(mapStateToProps)(BackButton);
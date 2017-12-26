import React from 'react';
import { Link } from 'react-router-dom';

const PauseButton = () => {
   return (
      <div className="button">
         <Link to="/game-paused" className="button__link">Pause</Link>
      </div>
   );
};

export default PauseButton;
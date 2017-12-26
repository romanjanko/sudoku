import React from 'react';
import { Link } from 'react-router-dom';

const PauseButton = () => {
   return (
      <Link to="/game-paused">Pause</Link>
   );
};

export default PauseButton;
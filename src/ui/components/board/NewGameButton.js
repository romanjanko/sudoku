import React from 'react';
import { Link } from 'react-router-dom';

const NewGameButton = () => {
   return (
      <Link to="/new-game">New Game</Link>
   );
};

export default NewGameButton;
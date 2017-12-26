import React from 'react';
import { Link } from 'react-router-dom';

const NewGameButton = () => {
   return (
      <div className="button">
         <Link to="/new-game" className="button__link">New Game</Link>
      </div>
   );
};

export default NewGameButton;
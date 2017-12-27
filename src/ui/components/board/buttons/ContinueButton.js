import React from 'react';
import { Link } from 'react-router-dom';

const ContinueButton = () => {
   return (
      <div className="button">
         <Link to="/" className="button__link">Continue</Link>
      </div>
   );
};

export default ContinueButton;
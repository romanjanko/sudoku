import React from 'react';
import { Link } from 'react-router-dom';

//TODO styling
const NotFoundPage = () => (
   <div className="margin-top-high">
      <p className="par">
      Sorry, this page isn't available.
      </p>
      <p>
         <Link to="/">Home</Link>
      </p>
   </div>
);

export default NotFoundPage;
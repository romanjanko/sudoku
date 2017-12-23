import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
   <div>
      Sorry, this page isn't available.
      <Link to="/">Home</Link>
   </div>
);

export default NotFoundPage;
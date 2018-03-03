import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => (
   <div className="main-menu__page">
      <div className="main-menu__heading">
         <Link to="/menu" className="main-menu__arrow-link"><i className="fa fa-arrow-left" /></Link>
         <span>About</span>
      </div>
      <div className="main-menu__text-block">
         <p className="par">
            Created as a hobby project. Written in React and Redux. A repo can be found on&nbsp;
            <a className="link" href="https://github.com/romanjanko/sudoku">
               <i className="fab fa-github" />
            </a>.
         </p>
         <p className="par">
            Design was inspired by <a className="link" href="http://www.banana-co.com/">Banana & Co.</a>'s 
            beautiful mobile game. Make sure to check it out!
         </p>
      </div>
   </div>
);

export default AboutPage;
import React from 'react';
import { Link } from 'react-router-dom';

const LeaderboardPage = () => (
   <div className="main-menu__page">
      <div className="main-menu__heading">
         <Link to="/menu" className="main-menu__arrow-link"><i className="fa fa-arrow-left" /></Link>
         <span>Leaderboard</span>
      </div>
   </div>
);

export default LeaderboardPage;
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import SettingsPage from './settings/SettingsPage';
import LeaderboardPage from './leaderboard/LeaderboardPage';
import AboutPage from './about/AboutPage';

const MainMenuPage = ({ match }) => (
   <div className="main-menu">
      <Route exact path={match.url} render={() => (
         <ul className="main-menu__list">
            <li className="main-menu__item">
               <Link className="main-menu__link" to={`${match.url}/settings`}>Settings</Link>
            </li>
            <li className="main-menu__item">
               <Link className="main-menu__link" to={`${match.url}/leaderboard`}>Leaderboard</Link>
            </li>
            <li className="main-menu__item">
               <Link className="main-menu__link" to={`${match.url}/about`}>About</Link>
            </li>
         </ul>
      )} />

      <Route path={`${match.url}/settings`} component={SettingsPage} />
      <Route path={`${match.url}/leaderboard`} component={LeaderboardPage} />
      <Route path={`${match.url}/about`} component={AboutPage} />
   </div>
);

export default MainMenuPage;
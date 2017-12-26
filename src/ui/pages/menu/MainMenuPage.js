import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import SettingsPage from './SettingsPage';
import LeaderboardPage from './LeaderboardPage';
import AboutPage from './AboutPage';
import NotFoundPage from '../NotFoundPage';

const MainMenuPage = ({ match }) => (
   <div className="main-menu">
      <Switch>
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
         <Route path="*" component={NotFoundPage} />
      </Switch>
   </div>
);

export default MainMenuPage;
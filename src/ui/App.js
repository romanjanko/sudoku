import React, { Component } from 'react';
import { Route, withRouter, Switch, matchPath } from 'react-router-dom';

import MainHeading from './components/home/MainHeading';
import MainMenuButton from './components/home/MainMenuButton';
import Layout from './components/home/Layout';
import Footer from './components/home/Footer';

import NotFoundPage from './pages/NotFoundPage';
import MainBoardPage from './pages/board/MainBoardPage';
import NewGamePage from './pages/board/NewGamePage';
import GameFinishedPage from './pages/board/GameFinishedPage';
import GamePausedPage from './pages/board/GamePausedPage';
import MainMenuPage from './pages/menu/MainMenuPage';

class App extends Component {
   isMainMenuOpened = () => {
      const { location } = this.props;

      return matchPath(location.pathname, {
         path: "/menu"
      });
   }

   render() {
      const { location } = this.props;
      const isMainMenuOpened = this.isMainMenuOpened();
      
      return (
         <Layout
            defaultBackgroundOn={!isMainMenuOpened}
            renderMainHeading={<MainHeading />}
            renderMainMenuButton={<MainMenuButton mainMenuIsOpened={isMainMenuOpened} 
                                                  currentUrl={location.pathname} />}
            renderFooter={<Footer />} >
            <Switch>
               <Route exact path="/" component={MainBoardPage} />
               <Route path="/new-game" component={NewGamePage} />
               <Route path="/game-finished" component={GameFinishedPage} />
               <Route path="/game-paused" component={GamePausedPage} />
               <Route path="/menu" component={MainMenuPage} />
               <Route path="*" component={NotFoundPage} />
            </Switch>
         </Layout>
      );
   }
}

export default withRouter(App);

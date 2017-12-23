import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import MainHeading from './home/MainHeading';
import MainMenuButton from './home/MainMenuButton';
import Layout from './home/Layout';
import NotFoundPage from './home/NotFoundPage';
import BoardPage from './board/BoardPage';
import MainMenuPage from './menu/MainMenuPage';
import Footer from './home/Footer';

class App extends Component {
   isRootPathMatched = () => {
      const { match } = this.props;
      return match.isExact && match.path === "/";
   }

   render() {
      const isRootPath = this.isRootPathMatched();

      return (
         <Layout
            defaultBackgroundOn={isRootPath}
            renderMainHeading={<MainHeading />}
            renderMainMenuButton={<MainMenuButton defaultButtonStateOn={isRootPath}/>}
            renderFooter={<Footer />} >
            <Switch>
               <Route exact path="/" component={BoardPage} />
               <Route path="/menu" component={MainMenuPage} />
               <Route path="*" component={NotFoundPage} />
            </Switch>
         </Layout>
      );
   }
}

export default withRouter(App);

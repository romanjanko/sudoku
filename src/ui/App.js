import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import MainHeading from './home/MainHeading';
import MainMenuButton from './home/MainMenuButton';
import Frame from './home/Frame';
import Background from './home/Background';
import BoardPage from './board/BoardPage';
import MainMenuPage from './menu/MainMenuPage';

class App extends Component {
   isRootPathMatched = () => {
      const { match } = this.props;
      return match.isExact && match.path === "/";
   }

   render() {
      const isRootPath = this.isRootPathMatched();

      return (
         <Frame>
            <Background defaultBackgroundOn={isRootPath}>
               <MainHeading />
               <MainMenuButton defaultButtonStateOn={isRootPath}/>

               <Route exact path="/" component={BoardPage} />
               <Route path="/menu" component={MainMenuPage} />
            </Background>
         </Frame>
      );
   }
}

export default withRouter(App);

import React, { Component } from 'react';

import MainHeading from "./MainHeading";
import Board from './Board';
import Footer from './Footer';
import MainMenuButton from './MainMenuButton';

export default class App extends Component {
   render() {
      return (
         <div>
            <MainHeading />
            <MainMenuButton />
            <Board />
            <Footer />
         </div>
      );
   }
}

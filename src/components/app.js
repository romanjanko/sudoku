import React, { Component } from 'react';

import MainHeading from "./MainHeading";
import Board from './Board';
import Footer from './Footer';

export default class App extends Component {
   render() {
      return (
         <div>
            <MainHeading />
            <Board />
            <Footer />
         </div>
      );
   }
}

import React, { Component } from 'react';

import Board from './Board';

export default class App extends Component {
   render() {
      return (
         <div>
            <div className="header">
               <span className="header__letter header__letter--red header__letter--circle">S</span>
               <span className="header__letter header__letter--orange">u</span>
               <span className="header__letter header__letter--purple header__letter--circle">d</span>
               <span className="header__letter header__letter--green">o</span>
               <span className="header__letter header__letter--blue">k</span>
               <span className="header__letter header__letter--yellow header__letter--circle">u</span>
            </div>
            <Board />
         </div>
      );
   }
}

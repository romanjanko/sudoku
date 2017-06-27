import React, { Component } from 'react';

import Board from './Board';

export default class App extends Component {
   render() {
      return (
         <div>
            <div>Sudoku</div>
            <Board />
         </div>
      );
   }
}

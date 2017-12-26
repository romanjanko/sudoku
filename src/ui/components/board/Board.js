import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardCell from './BoardCell';

class Board extends Component {
   static propTypes = {
      boardSize: React.PropTypes.number.isRequired
   }

   renderCell(row, column) {
      return (
         <td key={`${row}_${column}`} className="board__column">
            <BoardCell row={row} column={column} />
         </td>
      );
   }

   renderRow(rowNumber) {
      const { boardSize } = this.props;
      const columnNumbers = this.generateSequence(boardSize);

      return (
         <tr key={rowNumber} className="board__row">
            { columnNumbers.map(columnNumber => this.renderCell(rowNumber, columnNumber))}
         </tr>
      );
   }

   generateSequence = (size) => Array.from(Array(size), (val, index) => index + 1);

   render() {
      const { boardSize } = this.props;
      const rowNumbers = this.generateSequence(boardSize);

      return (
         <table className="board__content">
            <tbody>
               { rowNumbers.map(row => this.renderRow(row)) }
            </tbody>
         </table>
      );
   }
}

const mapStateToProps = (state) => ({
   boardSize: state.boardSize
});

export default connect(mapStateToProps)(Board);

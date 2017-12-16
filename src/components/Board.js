import React, { Component } from 'react';
import { connect } from 'react-redux';
import groupBy from 'lodash/collection/groupBy';

import BoardCell from './BoardCell';

class Board extends Component {
   static propTypes = {
      cells: React.PropTypes.array.isRequired
   }

   static defaultProps = {
      cells: []
   }

   renderCell(cell) {
      return (
         <td key={`${cell.row}_${cell.column}`} className="board__column">
            <BoardCell cell={cell} />
         </td>
      );
   }

   renderRow(row) {
      if (!row) 
         return null;

      const rowOfFirstCell = row[0].row;

      return (
         <tr key={rowOfFirstCell} className="board__row">
            { row.map(cell => this.renderCell(cell))}
         </tr>
      );
   }

   render() {
      const { cells } = this.props;
      const cellsByRows = groupBy(cells, cell => cell.row);

      return (
         <div className="board">
            <div className="board__container">
               <table className="board__content">
                  <tbody>
                     { Object.keys(cellsByRows).map(row => this.renderRow(cellsByRows[row])) }
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

//TODO get rid of redux dependency
const mapStateToProps = (state) => ({
   cells: state.boardCells
});

export default connect(mapStateToProps)(Board);

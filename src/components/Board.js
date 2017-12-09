import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import groupBy from 'lodash/collection/groupBy';

import { setCell, deleteCell } from '../actions';

class Board extends Component {
   static propTypes = {
      cells: React.PropTypes.array.isRequired,
      setCell: React.PropTypes.func.isRequired,
      deleteCell: React.PropTypes.func.isRequired
   }

   static defaultProps = {
      cells: []
   }

   handleCellChange(row, column, event) {
      event.preventDefault();
      const { setCell, deleteCell } = this.props;
      const enteredValue = event.target.value;

      if (enteredValue)
         setCell(row, column, Number(enteredValue));
      else
         deleteCell(row, column);
   }

   renderCell(cell) {
      return (
         <td key={`${cell.row}_${cell.column}`}>
            <input type="text" 
                   value={cell.value} 
                   readOnly={cell.readOnly} 
                   onChange={this.handleCellChange.bind(this, cell.row, cell.column)}
                   style={{width: "45px", fontSize: "24px"}} />
         </td>
      );
   }

   renderRow(row) {
      if (!row) 
         return null;

      const rowOfFirstCell = row[0].row;

      return (
         <tr key={rowOfFirstCell}>
            { row.map(cell => this.renderCell(cell))}
         </tr>
      );
   }

   render() {
      const { cells } = this.props;
      const cellsByRows = groupBy(cells, cell => cell.row);

      return (
         <table>
            <tbody>
               { Object.keys(cellsByRows).map(row => this.renderRow(cellsByRows[row])) }
            </tbody>
         </table>
      );
   }
}

const mapStateToProps = (state) => ({
   cells: state.boardCells
});

const mapDispatchToProps = (dispatch) =>
   bindActionCreators({ setCell, deleteCell }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Board);

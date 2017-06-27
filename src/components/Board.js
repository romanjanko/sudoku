import React, { Component } from 'react';
import { connect } from 'react-redux';
import groupBy from 'lodash/collection/groupBy';

class Board extends Component {
   static propTypes = {
      cells: React.PropTypes.array.isRequired
   }

   static defaultProps = {
      cells: []
   }

   renderCell(cell) {
      return (
         <td key={`${cell.row}_${cell.column}`}>
            <input type="text" 
                   value={cell.value} 
                   readOnly={cell.readOnly} 
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

export default connect(mapStateToProps)(Board);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import find from 'lodash/collection/find';
import debounce from 'lodash/function/debounce';

import { setCell, deleteCell, selectCell, unselectCell } from './actions';

class BoardCell extends Component {
   static propTypes = {
      row: React.PropTypes.number.isRequired,
      column: React.PropTypes.number.isRequired,
      value: React.PropTypes.string.isRequired,
      readOnly: React.PropTypes.bool.isRequired,
      isSelected: React.PropTypes.bool.isRequired,
      setCell: React.PropTypes.func.isRequired,
      deleteCell: React.PropTypes.func.isRequired,
      selectCell: React.PropTypes.func.isRequired,
      unselectCell: React.PropTypes.func.isRequired
   }

   constructor(props) {
      super(props);

      this.handleKeyDownEvent = this.handleKeyDownEvent.bind(this);
      this.handleBlurEvent = this.handleBlurEvent.bind(this);
      this.handleFocusEvent = this.handleFocusEvent.bind(this);
   }

   handleFocusEvent(event) {
      event.preventDefault();
      const { readOnly, row, column, selectCell } = this.props;

      if (!readOnly)
         selectCell(row, column);
   }

   handleBlurEvent(event) {
      event.preventDefault();
      const { readOnly, row, column, unselectCell } = this.props;

      debounce(() => {
         if (!readOnly)
            unselectCell(row, column);
      }, 100)(); //TODO better solution
   }

   handleKeyDownEvent(event) {
      event.preventDefault();
      const { row, column, setCell, deleteCell } = this.props;
      const backspaceKeyCode = 8;
      const deleteKeyCode = 46;
      
      if (event.keyCode === backspaceKeyCode || event.keyCode === deleteKeyCode) {
         deleteCell(row, column);
         return;
      }
      
      if (!/[0-9]/.test(event.key))
         return;

      setCell(row, column, Number(event.key));
   }

   render() {
      const { readOnly, value, isSelected } = this.props;
      let className = "board__cell ";

      if (readOnly)
         className += ` board__cell--${value}`;
      else if (isSelected)
         className += " board__cell--selected";
      else
         className += " board__cell--selectable";

      return (
         <input 
            type="text"
            value={value}
            readOnly={readOnly}
            className={className}
            onKeyDown={this.handleKeyDownEvent}
            onFocus={this.handleFocusEvent}
            onBlur={this.handleBlurEvent} />
      );
   }
}

const mapStateToProps = (state, ownProps) => {
   const cell = find(state.boardCells, 
      cell => cell.row === ownProps.row && cell.column === ownProps.column);
   
   return {
      value: cell.value ? cell.value.toString() : "",
      readOnly: cell.readOnly,
      isSelected: state.selectedBoardCell ? 
         state.selectedBoardCell.row === cell.row && state.selectedBoardCell.column === cell.column :
         false
   };
};

const mapDispatchToProps = dispatch =>
   bindActionCreators({ setCell, deleteCell, selectCell, unselectCell }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BoardCell);

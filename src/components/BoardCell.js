import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { setCell, deleteCell } from '../actions';

class BoardCell extends Component {
   static propTypes = {
      cell: React.PropTypes.shape({
         value: React.PropTypes.number,
         row: React.PropTypes.number.isRequired,
         column: React.PropTypes.number.isRequired,
         readOnly: React.PropTypes.bool.isRequired
      }).isRequired,
      setCell: React.PropTypes.func.isRequired,
      deleteCell: React.PropTypes.func.isRequired
   }

   constructor(props) {
      super(props);

      this.state = {
         value: props.cell.value ? props.cell.value : ""
      };
   }

   handleBlurEvent({ row, column }, event) {
      event.preventDefault();
      const { setCell, deleteCell } = this.props;
      const enteredValue = this.state.value;

      if (enteredValue)
         setCell(row, column, Number(enteredValue));
      else
         deleteCell(row, column);
   }

   handleKeyDownEvent({ row, column }, event) {
      event.preventDefault();
      const backspaceKeyCode = 8;
      const deleteKeyCode = 46;
      
      if (event.keyCode === backspaceKeyCode || event.keyCode === deleteKeyCode) {
         this.setState({ value: "" });
         return;
      }
      
      if (!/[0-9]/.test(event.key))
         return;

      this.setState({ value: event.key });
   }

   render() {
      const { cell } = this.props;
      let className = "board__cell ";

      if (cell.readOnly)
         className += ` board__cell--${cell.value}`;
      else
         className += " board__cell--selectable";

      return (
         <input 
            type="text"
            value={this.state.value}
            readOnly={cell.readOnly}
            className={className}
            onKeyDown={this.handleKeyDownEvent.bind(this, cell)}
            onBlur={this.handleBlurEvent.bind(this, cell)} />
      );
   }
}

const mapDispatchToProps = (dispatch) =>
   bindActionCreators({ setCell, deleteCell }, dispatch);

export default connect(null, mapDispatchToProps)(BoardCell);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import find from 'lodash/collection/find';

import { setCell, deleteCell } from './actions';

class BoardCell extends Component {
   static propTypes = {
      row: React.PropTypes.number.isRequired,
      column: React.PropTypes.number.isRequired,
      value: React.PropTypes.string.isRequired,
      readOnly: React.PropTypes.bool.isRequired,
      setCell: React.PropTypes.func.isRequired,
      deleteCell: React.PropTypes.func.isRequired
   }

   constructor(props) {
      super(props);

      this.state = {
         value: props.value
      };

      this.handleKeyDownEvent = this.handleKeyDownEvent.bind(this);
      this.handleBlurEvent = this.handleBlurEvent.bind(this);
   }

   handleBlurEvent(event) {
      event.preventDefault();
      const { row, column, setCell, deleteCell } = this.props;
      const enteredValue = this.state.value;

      if (enteredValue)
         setCell(row, column, Number(enteredValue));
      else
         deleteCell(row, column);
   }

   handleKeyDownEvent(event) {
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
      const { readOnly, value } = this.props;
      let className = "board__cell ";

      if (readOnly)
         className += ` board__cell--${value}`;
      else
         className += " board__cell--selectable";

      return (
         <input 
            type="text"
            value={this.state.value}
            readOnly={readOnly}
            className={className}
            onKeyDown={this.handleKeyDownEvent}
            onBlur={this.handleBlurEvent} />
      );
   }
}

const mapStateToProps = (state, ownProps) => {
   const cell = find(state.boardCells, 
      cell => cell.row === ownProps.row && cell.column === ownProps.column);

   return {
      value: cell.value ? cell.value.toString() : "",
      readOnly: cell.readOnly
   };
};

const mapDispatchToProps = (dispatch) =>
   bindActionCreators({ setCell, deleteCell }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BoardCell);

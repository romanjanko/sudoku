import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { giveHint } from '../actions';

class HintButton extends Component {
   static propTypes = {
      selectedBoardCell: React.PropTypes.shape({
         row: React.PropTypes.number.isRequired,
         column: React.PropTypes.number.isRequired
      }),
      giveHint: React.PropTypes.func.isRequired
   }

   constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick(event) {
      event.preventDefault();
      const { selectedBoardCell } = this.props;

      if (selectedBoardCell) {
         const { row, column } = selectedBoardCell;
         this.props.giveHint(row, column);
      }
   }

   render() {
      const { selectedBoardCell } = this.props;

      if (!selectedBoardCell)
         return null;

      return (
         <div className="button">
            <a href="#" className="button__link" onClick={this.handleClick}>Hint</a>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   selectedBoardCell: state.selectedBoardCell
});

const mapDispatchToProps = dispatch =>
   bindActionCreators({ giveHint }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HintButton);
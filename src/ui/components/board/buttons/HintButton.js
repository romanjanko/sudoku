import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { giveHint } from '../actions';

class HintButton extends Component {
   static propTypes = {
      enabled: React.PropTypes.bool,
      activatedByBoardCell: React.PropTypes.shape({
         row: React.PropTypes.number.isRequired,
         column: React.PropTypes.number.isRequired
      }),
      giveHint: React.PropTypes.func.isRequired
   }

   static defaultProps = {
      enabled: true
   }

   constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick(event) {
      event.preventDefault();
      const { activatedByBoardCell } = this.props;

      if (activatedByBoardCell) {
         const { row, column } = activatedByBoardCell;
         this.props.giveHint(row, column);
      }
   }

   render() {
      const { enabled } = this.props;

      if (!enabled)
         return null;

      return (
         <div className="button">
            <a href="#" className="button__link" onClick={this.handleClick}>Hint</a>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   activatedByBoardCell: state.hints.activatedByBoardCell,
   enabled: state.hints.activatedByBoardCell !== null
});

const mapDispatchToProps = dispatch =>
   bindActionCreators({ giveHint }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HintButton);
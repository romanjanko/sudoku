import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { giveHint } from '../actions';

class HintButton extends Component {
   static propTypes = {
      giveHint: React.PropTypes.func.isRequired
   }

   constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick(event) {
      event.preventDefault();
      this.props.giveHint();
   }

   render() {
      return (
         <div className="button">
            <a href="#" className="button__link" onClick={this.handleClick}>Hint</a>
         </div>
      );
   }
}

const mapDispatchToProps = dispatch =>
   bindActionCreators({ giveHint }, dispatch);

export default connect(null, mapDispatchToProps)(HintButton);
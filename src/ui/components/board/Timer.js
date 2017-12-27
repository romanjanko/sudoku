import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { incrementTime } from './actions';

class Timer extends Component {
   static propTypes = {
      incrementTime: React.PropTypes.func.isRequired
   }

   constructor(props) {
      super(props);

      this.timerId = setInterval(props.incrementTime, 1000);
   }

   componentWillUnmount() {
      clearInterval(this.timerId);
   }

   render = () => null;
}

const mapDispatchToProps = dispatch => 
   bindActionCreators({ incrementTime }, dispatch);

export default connect(null, mapDispatchToProps)(Timer);
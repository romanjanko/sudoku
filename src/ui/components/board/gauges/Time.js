import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

const Time = ({ time }) => (
   <div>
      <span className="padding-right-small">
         <i className="fas fa-clock" />
      </span>
      <span>{numeral(time).format("00:00:00")}</span>
   </div>
);

Time.propTypes = {
   time: React.PropTypes.number.isRequired
};

const mapStateToProps = state => ({
   time: state.time
});

export default connect(mapStateToProps)(Time);
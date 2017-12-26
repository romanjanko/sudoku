import React from 'react';
import { connect } from 'react-redux';

//TODO when text is selected, there is a weird underline left
const Hints = ({ hints }) => (
   <span className="padding-right-small">
      <span className="padding-right-small">
         <i className="fas fa-question" />
      </span>
      {hints === 0 && <span>No hint used</span>}
      {hints === 1 && <span>{hints} hint used</span>}
      {hints >=  2 && <span>{hints} hints used</span>}
   </span>
);

Hints.propTypes = {
   hints: React.PropTypes.number.isRequired
};

const mapStateToProps = state => ({
   hints: state.hints
});

export default connect(mapStateToProps)(Hints);
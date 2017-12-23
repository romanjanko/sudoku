import React from 'react';

const Frame = (props) => {
   return (
      <div className="frame">
         {props.children}
      </div>
   )
};

Frame.propTypes = {
   children: React.PropTypes.node.isRequired
}

export default Frame;
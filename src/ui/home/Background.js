import React from 'react';

import Footer from './Footer';

const Background = (props) => {
   return (
      <div className={props.defaultBackgroundOn ? "background__primary" : "background__secondary"}>
         {props.children}
         <Footer />
      </div>
   )
};

Background.propTypes = {
   children: React.PropTypes.node.isRequired,
   defaultBackgroundOn: React.PropTypes.bool.isRequired
}

export default Background;
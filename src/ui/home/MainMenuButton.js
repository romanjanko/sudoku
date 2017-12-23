import React from 'react';
import { Link } from 'react-router-dom';

const MainMenuButton = (props) => {
   return (
      <Link className="main-menu-button" to={props.defaultButtonStateOn ? "/menu" : "/"}>
         {props.defaultButtonStateOn ?
            <span className="main-menu-button__hamburger-icon" />
            :
            <span className="main-menu-button__cross-icon" />
         }
      </Link>
   );
};

MainMenuButton.propTypes = {
   defaultButtonStateOn: React.PropTypes.bool.isRequired
}

export default MainMenuButton;
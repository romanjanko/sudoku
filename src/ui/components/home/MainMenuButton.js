import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class MainMenuButton extends PureComponent {
   static propTypes = {
      mainMenuIsOpened: React.PropTypes.bool.isRequired,
      currentUrl: React.PropTypes.string.isRequired
   }

   constructor(props) {
      super(props);

      this.calculateReturnUrl();
   }

   calculateReturnUrl() {
      const { mainMenuIsOpened, currentUrl } = this.props;

      if (!this.returnUrl)
         this.returnUrl = "/";

      if (!mainMenuIsOpened)
         this.returnUrl = currentUrl;
   }
   
   render() {
      const { mainMenuIsOpened } = this.props;
      this.calculateReturnUrl();

      return (
         <Link className="main-menu-button" to={mainMenuIsOpened ? this.returnUrl : "/menu"}>
            {mainMenuIsOpened ?
               <span className="main-menu-button__cross-icon" />
               :
               <span className="main-menu-button__hamburger-icon" />
            }
         </Link>
      );
   }
} 
import React from 'react';

const Layout = ({ 
   defaultBackgroundOn,
   renderMainHeading,
   renderMainMenuButton,
   children,
   renderFooter
}) => {
   return (
      <div className="layout">
         <div className={defaultBackgroundOn ? 
            "layout__background" : "layout__background layout__background--secondary-color"}>
            <div className="layout__button">
               {renderMainMenuButton}
            </div>
            <div className="layout__heading">
               {renderMainHeading}
            </div>
            <div className="layout__content">
               {children}
            </div>
            <div className="layout__footer">
               {renderFooter}
            </div>
         </div>
      </div>
   );
};

//TODO correct types?
Layout.propTypes = {
   defaultBackgroundOn: React.PropTypes.bool.isRequired,
   renderMainHeading: React.PropTypes.node.isRequired,
   renderMainMenuButton: React.PropTypes.node.isRequired,
   children: React.PropTypes.node.isRequired,
   renderFooter: React.PropTypes.node.isRequired
};

export default Layout;

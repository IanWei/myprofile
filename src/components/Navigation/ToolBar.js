import React from 'react';
import NavigationList from './NavigationList';
import Logo from '../Logo/Logo';

const ToolBar = ({logoClick, topRef}) => {
  return (
    <div className="navigation u-margin-bottom-small">
      <div className="navigation__logo">
        <Logo clicked={logoClick} topRef={topRef} top/>
      </div>
      <nav className="navigation__nav">
        <NavigationList/>
      </nav>
    </div>
  );
};

export default ToolBar;
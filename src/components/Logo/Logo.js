import React from 'react';
import logo from '../../assets/images/logo.png';

const Logo = props => {
  let logoClass = ["logo"];
  if (props.top) {
    logoClass.push("logo--top");
  } else if (props.invisible) {
    logoClass.push("logo--invisible");
  }

  return (
    <div className={logoClass.join(' ')}>
      <img src={logo} className="logo__image" alt="logo"/>
    </div>
  );
};

export default Logo;
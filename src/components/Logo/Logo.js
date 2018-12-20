import React from 'react';
import logo from '../../assets/images/logo.png';

const Logo = ({top, invisible, clicked, topRef}) => {
  let logoClass = ["logo"];
  if (top) logoClass.push("logo--top");
  if (invisible) logoClass.push("logo--invisible");

  return (
    <div className={logoClass.join(' ')} onClick={() => clicked(topRef)}>
      <img src={logo} className="logo__image" alt="logo"/>
    </div>
  );
};

export default Logo;
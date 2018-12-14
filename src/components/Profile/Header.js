import React from 'react';
import bg from '../../assets/images/bg.jpg';

const Header = props => {
  const style = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    height: "85vh",
    backgroundImage: `linear-gradient(to right bottom, rgba(0,255,255,.7)`
  };
  return (
    <header className="header" style={{...style}}>
      Hi
    </header>
  );
};

export default Header;
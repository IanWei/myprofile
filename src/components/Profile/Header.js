import React from 'react';
import bg from '../../assets/images/bg.jpg';
import me from '../../assets/images/me.JPG';
import styled from 'styled-components';
import { color } from '../../shared/styles';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/UI/Button';
// import { AwesomeButton } from 'react-awesome-button';
// import 'react-awesome-button/dist/styles.css';

const Header = props => {
  const BgImage = styled.header`
    background-image: linear-gradient(to right bottom, ${color.primaryLight}, ${color.primaryDark}), url(${bg});
    background-size: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
  `;
  return (
    <header className="header">
      <BgImage/>
      <Logo/>
      <div className="header__text-box">
        <div className="header__photo">
          <img src={me} alt="Wei-Hao Wei" className="header__img"/>
        </div>
        <h1 className="heading-primary">
          <span className="heading-primary--main">Wei-Hao Wei</span>
          <span className="heading-primary--sub">Front End Developer</span>
        </h1>
        <Button clicked={props.btnClick} btnType="btn btn--white btn--animated"/>
      </div>

    </header>
  );
};

export default Header;
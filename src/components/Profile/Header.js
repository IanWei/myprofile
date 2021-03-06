import React from 'react';
import bg from '../../assets/images/bg.jpg';
import bgMin from '../../assets/images/bg-min.jpg';
import me from '../../assets/images/me.JPG';
import styled from 'styled-components';
import { color, media } from '../../shared/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Header = props => {
  const BgImage = styled.header`
    background-image: linear-gradient(to right bottom, ${color.primaryLight}, ${color.primaryDark}), url(${bgMin});
    ${media.phoneView`
      background-image: linear-gradient(to right bottom,
            ${color.primaryLight},
            ${color.primaryDark}),
            url(${bg});}
    `}
    background-size: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
  `;

  return (
    <header className="header u-margin-top-big">
      <BgImage/>
      <div className="header__text-box">
        <div className="header__photo">
          <img src={me} alt="Wei-Hao Wei" className="header__img"/>
        </div>
        <h1 className="heading-primary">
          <span className="heading-primary--main">Wei-Hao Wei</span>
          <span className="heading-primary--sub">Front End Developer</span>
        </h1>
        <AnchorLink href="#section-about" className="btn btn--white btn--animated">
          About Me
        </AnchorLink>
      </div>
    </header>
  );
};

export default Header;
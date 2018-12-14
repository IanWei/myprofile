import React from 'react';
import bg from '../../assets/images/bg.jpg';
import styled from 'styled-components';
import { color } from '../../shared/styles';

const Header = props => {
  

  const Header = styled.header`
    background-image: linear-gradient(to right bottom, ${color.primaryLight}, ${color.primaryDark}), url(${bg});
    background-size: cover;
    height: 85vh;
    position: relative;
  `;
  return (
    <Header>hi</Header>
  );
};

export default Header;
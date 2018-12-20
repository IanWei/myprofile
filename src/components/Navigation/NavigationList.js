import React from 'react';
import NavigationItem from './NavigationItem';

const NavigationList = props => (
  <ul className="navigation__list">
    <NavigationItem link={'#section-interesting'}>Interesting</NavigationItem>
    <NavigationItem link={'#section-about'}>About Me</NavigationItem>

  </ul>
);

export default NavigationList;
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavigationItem = ({link, children}) => {
  const className=["navigation__item"];

  return (
    <li className={className}>
      <AnchorLink
        href={link}>
        {children}
      </AnchorLink>
    </li>
  );
};

export default NavigationItem;
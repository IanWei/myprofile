import React from 'react';

const button = props => {
  const {white, animated, clicked, children} = props;

  const className = ["btn"];
  if (white) className.push('btn--white');
  if (animated) className.push('btn--animated');

  return (
    <button className={className.join(' ')} onClick={clicked}>
      {children}
    </button>
  );
};

export default button;
import React from 'react';

const button = props => {
  const {btnType, clicked} = props;

  return (
    <button className={btnType} onClick={clicked}>
      About me
    </button>
  );
};

export default button;
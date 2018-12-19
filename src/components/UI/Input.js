import React from 'react';

const Input = props => {
  return (
    <div className="form__group">
      <input type={props.type} className="form__input" placeholder={props.labelName} id={props.idName} required/>
      <label htmlFor={props.idName} className="form__label">{props.labelName}</label>
    </div>
  );
};

export default Input;

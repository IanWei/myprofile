import React from 'react';


/* Accept two different radio input parameters but with the same name to render two aligned radios*/
const RadioInput = props => {
  const renderRadio = props.radioData.map((data, index) => (
    <div className="form__radio-group" key={index}>
      <input type="radio" className="form__radio-input" id={data.idName} name={data.name}/>
      <label htmlFor={data.idName} className="form__radio-label">
        <span className="form__radio-button"/>
        {data.labelName}
      </label>
    </div>
  ));
  return (
    <div className="form__group">
        {renderRadio}
    </div>
  );
};

export default RadioInput;
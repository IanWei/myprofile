import React from 'react';
import cook from '../../assets/images/cook.jpg';
import workout from '../../assets/images/workout.jpeg';
import travel from '../../assets/images/travel.jpg';

const Hobby = ({title, description, caption, index}) => {
  let src = '';
  switch ( caption ) {
    case "Cook": src = cook; break;
    case "Workout": src = workout; break;
    case "Travel": src = travel; break;
    default: src=""; break;
  }
  let hobbyArr = ['hobby'],
    shapeArr = ['hobby__shape'],
    textArr = ['hobby__text'];

  if (index %2 !== 0) {
    hobbyArr.push('hobby--1');
    shapeArr.push('hobby__shape--1');
  } else {
    hobbyArr.push('hobby--2');
    shapeArr.push('hobby__shape--2');
    textArr.push('hobby__text--right');
  }
  return (
    <div className="row">
      <div className={hobbyArr.join(' ')}>
        <figure className={shapeArr.join(' ')}>
          <img src={src} alt={caption} className="hobby__image"/>
            <figcaption className="hobby__caption">{caption}</figcaption>
        </figure>
        <div className={textArr.join(' ')}>
          <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
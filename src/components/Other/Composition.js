import React from 'react';
import pic1 from '../../assets/images/pic1.jpg';
import pic1Large from '../../assets/images/pic1-large.jpg';
import pic2 from '../../assets/images/pic2.jpg';
import pic2Large from '../../assets/images/pic2-large.jpg';
import pic3 from '../../assets/images/pic3.jpg';
import pic3Large from '../../assets/images/pic3-large.JPG';


/* Composition shows the combination of three different photo, and styles them in the component. */
const Composition = props => (
  <div className="composition">
    <img src={pic1}
         alt="pic1"
         className="composition__photo composition__photo--p1"
         srcSet={`${pic1} 300w, ${pic1Large} 960w`}
    />
    <img src={pic2}
         alt="pic2"
         className="composition__photo composition__photo--p2"
         srcSet={`${pic2} 300w, ${pic2Large} 960w`}
    />
    <img src={pic3}
         alt="pic3"
         className="composition__photo composition__photo--p3"
         srcSet={`${pic3} 300w, ${pic3Large} 960w`}
    />

  </div>
);

export default Composition;
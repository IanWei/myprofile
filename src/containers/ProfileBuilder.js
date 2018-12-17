import React, { Component } from 'react';
import Header from '../components/Profile/Header';
import SectionAbout from '../components/Profile/SectionAbout';
import Aux from '../hoc/Aux';

class ProfileBuilder extends Component {

  btnClickHandler = () => {
    console.log('Hello');
  };

  render() {
    return (
      <Aux>
        <Header btnClick={this.btnClickHandler}/>
        <SectionAbout/>
      </Aux>
    );
  }
}

export default ProfileBuilder;
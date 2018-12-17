import React, { Component } from 'react';
import Header from '../components/Profile/Header';

class ProfileBuilder extends Component {

  btnClickHandler = () => {
    console.log('Hello');
  };

  render() {
    return (
      <Header btnClick={this.btnClickHandler}/>
    );
  }
}

export default ProfileBuilder;
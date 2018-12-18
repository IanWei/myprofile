import React, { Component } from 'react';
import Header from '../components/Profile/Header';
import SectionAbout from '../components/Profile/SectionAbout';
import SectionInteresting from '../components/Profile/SectionInteresting';
import Footer from '../components/Profile/Footer';
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
        <SectionInteresting/>
        <Footer/>
      </Aux>
    );
  }
}

export default ProfileBuilder;
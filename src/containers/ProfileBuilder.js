import React, { Component } from 'react';
import Header from '../components/Profile/Header';
import SectionAbout from '../components/Profile/SectionAbout';
import SectionInteresting from '../components/Profile/SectionInteresting';
import Footer from '../components/Profile/Footer';
import Aux from '../hoc/Aux';
import Modal from '../components/UI/Modal';
import ContactForm from '../components/Other/ContactForm';

class ProfileBuilder extends Component {
  state = {
    showModal: false
  };

  btnClickHandler = () => {
    console.log('Hello');
  };

  modalShowHandler = () => {
    this.setState({showModal: true});
  };

  modalClosedHandler = () => {
    this.setState({showModal: false});
  };

  render() {
    return (
      <Aux>
        <Modal show={this.state.showModal} modalClose={this.modalClosedHandler}>
          <ContactForm/>
        </Modal>
        <Header btnClick={this.btnClickHandler}/>
        <SectionAbout/>
        <SectionInteresting/>
        <Footer btnClick={this.modalShowHandler}/>
      </Aux>
    );
  }
}

export default ProfileBuilder;
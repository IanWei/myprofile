import React, { Component } from 'react';
import Header from '../components/Profile/Header';
import SectionAbout from '../components/Profile/SectionAbout';
import SectionInteresting from '../components/Profile/SectionInteresting';
import Aux from '../hoc/Aux';
import Modal from '../components/UI/Modal';
import ContactForm from '../components/Other/ContactForm';
import Waypoint from 'react-waypoint';

class ProfileBuilder extends Component {
  state = {
    showModal: false,
  };

  modalShowHandler = () => {
    this.setState({showModal: true});
  };

  modalClosedHandler = () => {
    this.setState({showModal: false});
  };

  showEnterMessage = () => {
    console.log("[Entered]");
  };

  showLeaveMessage = () => {
    console.log("[Leave]");
  };

  render() {
    return (
      <Aux>
        <Modal show={this.state.showModal} modalClose={this.modalClosedHandler}>
          <ContactForm/>
        </Modal>
        <Header/>
        <SectionAbout/>
        <Waypoint topOffset='0%' bottomOffset='90%' onEnter={this.showEnterMessage} onLeave={this.showLeaveMessage}/>
        <SectionInteresting/>
      </Aux>
    );
  }
}

export default ProfileBuilder;
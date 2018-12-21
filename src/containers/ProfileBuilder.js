import React, { Component } from 'react';
import Header from '../components/Profile/Header';
import SectionAbout from '../components/Profile/SectionAbout';
import SectionInteresting from '../components/Profile/SectionInteresting';
import Aux from '../hoc/Aux';
import Modal from '../components/UI/Modal';
import ContactForm from '../components/Other/ContactForm';
import Waypoint from 'react-waypoint';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

class ProfileBuilder extends Component {

  modalShowHandler = () => {
    this.props.toggleModalState();
  };

  modalClosedHandler = () => {
    this.props.toggleModalState();
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
        <Modal show={this.props.showModal} modalClose={this.modalClosedHandler}>
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

const mapStateToProps = ({profile}) => {
  return {showModal: profile.showModal}
};

export default connect(mapStateToProps, actions)(ProfileBuilder);
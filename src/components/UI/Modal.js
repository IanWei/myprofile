import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Backdrop from './Backdrop';

class Modal extends Component {
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClose}/>
        <div
          className="modal"
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
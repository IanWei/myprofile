import React, { Component } from 'react';
import styled from 'styled-components';
import { color } from "../../shared/styles";
import bg from "../../assets/images/contact-bg.jpg";
import Input from '../../components/UI/Input';
import RadioInput from '../../components/UI/RadioInput';
import Button from '../../components/UI/Button';

class ContactForm extends Component {
  showMessage = (event) => {
    event.preventDefault();
    console.log( 'Submit' );
  };

  render() {
    const BgImage = styled.header`
      background-image: linear-gradient(${105}deg, ${color.primaryLight} 0%, ${color.primaryDark} 65%, transparent 65%), url(${bg});
      background-size: 100%;
      height: 100%;
      width: 100%;
    `;

    const RadioData = [
      {
        name: 'size',
        idName: 'small',
        labelName: 'Highly interested!'
      },
      {
        name: 'size',
        idName: 'large',
        labelName: 'Not too bad!'
      }
    ];

    return (
      <BgImage>
      <div className="contact-form">
        <form onSubmit={this.showMessage} className="form">
          <Input idName="company" labelName="Company" type="text"/>
          <Input idName="name" labelName="Full Name" type="text"/>
          <Input idName="email" labelName="Email Address" type="email"/>
          <RadioInput radioData={RadioData}/>
          <div className="form__group u-margin-top-medium">
            <Button white>
              Submit
            </Button>
          </div>
        </form>
      </div>
      </BgImage>
    );
  }
}

export default ContactForm;
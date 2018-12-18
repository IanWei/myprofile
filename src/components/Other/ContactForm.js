import React, { Component } from 'react';

class ContactForm extends Component {
  showMessage = (event) => {
    event.preventDefault();
    console.log( 'Submit' );
  };

  render() {
    return (
      <form onSubmit={this.showMessage} className="form">
        <div className="form__group">
          <input type="text" className="form__input" placeholder="Full Name" id="name" required/>
          <label htmlFor="name" className="form__label">Full name</label>
        </div>
        <div className="form__group">
          <input type="email" className="form__input" placeholder="Email Address" id="email" required/>
          <label htmlFor="email" className="form__label">Email Address</label>
        </div>
        <div className="form__group u-margin-bottom-medium">
          <div className="form__radio-group">
            <input type="radio" className="form__radio-input" id="small" name="size"/>
              <label htmlFor="small" className="form__radio-label">
                <span className="form__radio-button"/>
                Small tour group
              </label>
          </div>
          <div className="form__radio-group">
            <input type="radio" className="form__radio-input" id="large" name="size"/>
              <label htmlFor="large" className="form__radio-label">
                <span className="form__radio-button"/>
                Large tour group
              </label>
          </div>
        </div>
        <button>OK</button>
      </form>
    );
  }
}

export default ContactForm;
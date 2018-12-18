import React, { Component } from 'react';
import './assets/styles/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import ProfileBuilder from './containers/ProfileBuilder';

library.add(faEnvelopeSquare);



class App extends Component {
  render() {
    return (
      <ProfileBuilder/>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './assets/styles/main.scss';
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import ProfileBuilder from './containers/ProfileBuilder';
import Layout from './hoc/Layout';

library.add(faEnvelopeSquare);

class App extends Component {
  render() {
    let route = (
      <Switch>
        <Route path="/" component={ProfileBuilder}/>
      </Switch>
    );

    return (
      <Layout>
        {route}
      </Layout>
    );
  }
}

export default App;

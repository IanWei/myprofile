import React, { Component } from 'react';
import Aux from './Aux';
import Footer from '../components/Profile/Footer';
import ToolBar from "../components/Navigation/ToolBar";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.topRef = React.createRef();
    this.state = {
      topRef: this.topRef,
    }
  }
  scroll = (ref) => {
    ref.current.scrollIntoView({behavior: "smooth"});
  };

  render() {
    return (
      <Aux>
        <div ref={this.topRef}>{}</div>
        <ToolBar logoClick={this.scroll} topRef={this.state.topRef} waypoint={this.state.waypoint}/>
        <main className="content">
          {this.props.children}
        </main>
        <Footer logoClick={this.scroll} topRef={this.state.topRef}/>
      </Aux>
    );
  }
}

export default Layout;
import React, { Component } from "react";
import { connect } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { increment, decrement } from "./redux/counterreducer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          {/* {this.props.counter}
        <button onClick={() => this.props.increment(1)}>aaa</button> */}
          <div className="topBar">TopBar</div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ counter: state.counter });

export default connect(
  mapStateToProps,
  { increment, decrement }
)(App);

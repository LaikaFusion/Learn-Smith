import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/counterreducer";

import "./App.css";

class App extends Component {
  render() {
    return (
        <div className="App">
          {/* {this.props.counter}
        <button onClick={() => this.props.increment(1)}>aaa</button> */}
          <div className="topBar">TopBar</div>
          <div className="resources">Resource</div>
          <div className="customers">Cust</div>
          <div className="forges">forge</div>
        </div>
    );
  }
}

const mapStateToProps = state => ({ counter: state.counter });

export default connect(
  mapStateToProps,
  { increment, decrement }
)(App);

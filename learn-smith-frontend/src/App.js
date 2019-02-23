import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/counterreducer";

import "./App.css";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* {this.props.counter}
        <button onClick={() => this.props.increment(1)}>aaa</button> */}
        <div className="topBar">TopBar</div>
        <div className="resources">
          <Card>Resources</Card>
        </div>
        <div className="customers"><Card>Customers</Card></div>
        <div className="forges"><Card>forge</Card></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ counter: state.counter });

export default connect(
  mapStateToProps,
  { increment, decrement }
)(App);

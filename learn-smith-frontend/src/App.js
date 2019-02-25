import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/counterreducer";

import "./App.css";
import MainPage from "./components/MainPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "main"
    };
  }

  render() {
    const { display } = this.state;
    return (
      <div className="App">
        {/* {this.props.counter}
        <button onClick={() => this.props.increment(1)}>aaa</button> */}
        <div className="topBar">TopBar</div>
        {(() => {
          switch (display) {
            case "main":
              return <MainPage />;
            default:
              return <div> ERROR </div>;
          }
        })()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ counter: state.counter });

export default connect(
  mapStateToProps,
  { increment, decrement }
)(App);

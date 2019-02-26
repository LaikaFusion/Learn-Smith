import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/counterreducer";

import "./App.css";
import MainPage from "./components/MainPage";
import Alphabetical from "./components/Alphabetical";
import Morse from "./components/Morse";
import Nato from "./components/Nato";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "nato"
    };
  }

  changeDisplay = (e, changeTo = "main") => {
    e.preventDefault();
    this.setState({
      display: changeTo
    });
  };

  render() {
    const { display } = this.state;
    return (
      <div className="App">
        {/* {this.props.counter}
        <button onClick={() => this.props.increment(1)}>aaa</button> */}
        <div className="topBar">TopBar</div>
        <div className="lowerPage">
          {(() => {
            switch (display) {
              case "main":
                return <MainPage />;
              case "alpha":
                return <Alphabetical changeDisplay={this.changeDisplay} />;
              case "morse":
                return <Morse changeDisplay={this.changeDisplay} />;
              case "nato":
                return <Nato changeDisplay={this.changeDisplay} />;
              default:
                return <div> ERROR </div>;
            }
          })()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ counter: state.counter });

export default connect(
  mapStateToProps,
  { increment, decrement }
)(App);

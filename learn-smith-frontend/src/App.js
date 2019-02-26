import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/counterreducer";

import "./App.css";
import MainPage from "./components/MainPage";
import Alphabetical from "./components/games/Alphabetical";
import Morse from "./components/games/Morse";
import Nato from "./components/games/Nato";
import Hex from "./components/games/Hex";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "hex"
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
              case "hex":
                return <Hex changeDisplay={this.changeDisplay} />;
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

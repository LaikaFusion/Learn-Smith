import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/counterreducer";

import "./App.css";
import MainPage from "./components/MainPage";
import Alphabetical from "./components/games/Alphabetical";
import Morse from "./components/games/Morse";
import Nato from "./components/games/Nato";
import Hex from "./components/games/Hex";
import TimeZones from "./components/games/TimeZones";
import Percentages from "./components/games/Percentages";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { display } = this.props;
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
                return <Alphabetical />;
              case "morse":
                return <Morse />;
              case "nato":
                return <Nato />;
              case "hex":
                return <Hex />;
              case "zone":
                return <TimeZones />;
              case "perc":
                return <Percentages />;
              default:
                return <div> ERROR </div>;
            }
          })()}
        </div>
      </div>
    );
  }
}
App.propTypes = {
  display: PropTypes.string.isRequired
};
const mapStateToProps = state => ({
  counter: state.counter,
  display: state.display
});

export default connect(
  mapStateToProps,
  { increment, decrement }
)(App);

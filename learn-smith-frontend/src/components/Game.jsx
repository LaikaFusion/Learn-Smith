import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { switchDisplay } from "../redux/displayreducer";
import "./Game.css";

function Game(props) {
  const { resource, resourceType, children } = props;
  return (
    <div className="gameLayout">
      <div className="resourceDisplay">
        {resourceType}: {resource}
      </div>

      <div
        role="button"
        onClick={() => switchDisplay("main")}
        onKeyPress={() => switchDisplay("main")}
        className="backButton"
        tabIndex="0"
      >
        X
      </div>
      <div className="gameArea">{children}</div>
    </div>
  );
}

Game.propTypes = {
  resource: PropTypes.number.isRequired,
  resourceType: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default connect(
  null,
  { switchDisplay }
)(Game);

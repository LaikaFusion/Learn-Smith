import React from "react";
import PropTypes from "prop-types";
import "./Game.css";

function Game(props) {
  const { resource, resourceType, changeDisplay, children } = props;
  return (
    <div className="gameLayout">
      <div className="resourceDisplay">
        {resourceType}: {resource}
      </div>

      <div
        role="button"
        onClick={changeDisplay}
        onKeyPress={changeDisplay}
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
  changeDisplay: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Game;

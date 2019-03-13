import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { switchDisplay } from "../redux/displayreducer";
import { mapStateToProps, resPropTypes } from "../helpers/stateList";

const Resources = props => {
  const {
    wood,
    iron,
    silver,
    steel,
    copper,
    obsidian,
    gold,
    switchDisplay
  } = props;
  return (
    <div className="resources">
      <div className="resourceLine">Gold: {gold}</div>
      <div
        onClick={() => {
          switchDisplay("alpha");
        }}
        onKeyPress={() => {
          switchDisplay("alpha");
        }}
        role="button"
        className="resourceLine"
        tabIndex="0"
      >
        Wood: {wood}
      </div>
      <div
        onClick={() => {
          switchDisplay("hex");
        }}
        onKeyPress={() => {
          switchDisplay("hex");
        }}
        role="button"
        className="resourceLine"
        tabIndex="-1"
      >
        Iron: {iron}
      </div>
      <div
        onClick={() => {
          switchDisplay("zone");
        }}
        onKeyPress={() => {
          switchDisplay("zone");
        }}
        role="button"
        className="resourceLine"
        tabIndex="-1"
      >
        Silver: {silver}
      </div>
      <div
        onClick={() => {
          switchDisplay("nato");
        }}
        onKeyPress={() => {
          switchDisplay("nato");
        }}
        role="button"
        className="resourceLine"
        tabIndex="-1"
      >
        Steel: {steel}
      </div>
      <div
        onClick={() => {
          switchDisplay("morse");
        }}
        onKeyPress={() => {
          switchDisplay("morse");
        }}
        role="button"
        className="resourceLine"
        tabIndex="-1"
      >
        Copper: {copper}
      </div>
      {/* <div className="resourceLine">Bronze: {bronze}</div> */}
      <div
        onClick={() => {
          switchDisplay("perc");
        }}
        onKeyPress={() => {
          switchDisplay("perc");
        }}
        role="button"
        className="resourceLine"
        tabIndex="-1"
      >
        Obsidian: {obsidian}
      </div>
    </div>
  );
};

Resources.propTypes = {
  ...resPropTypes,
  switchDisplay: PropTypes.func.isRequired,
  gold: PropTypes.number.isRequired

};



export default connect(
 mapStateToProps,
  { switchDisplay }
)(Resources);

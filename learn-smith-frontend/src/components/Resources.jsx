import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { switchDisplay } from "../redux/displayreducer";

const Resources = props => {
  const {
    wood,
    iron,
    silver,
    steel,
    copper,
    bronze,
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
  wood: PropTypes.number.isRequired,
  iron: PropTypes.number.isRequired,
  steel: PropTypes.number.isRequired,
  silver: PropTypes.number.isRequired,
  copper: PropTypes.number.isRequired,
  bronze: PropTypes.number.isRequired,
  obsidian: PropTypes.number.isRequired,
  gold: PropTypes.number.isRequired,
  switchDisplay: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  wood: state.wood,
  iron: state.iron,
  steel: state.steel,
  silver: state.silver,
  copper: state.copper,
  bronze: state.bronze,
  obsidian: state.obsidian,
  gold: state.gold
});

export default connect(
  mapStateToProps,
  { switchDisplay }
)(Resources);

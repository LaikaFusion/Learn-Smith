import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Resources = props => {
  const { wood, iron, silver, steel, copper, bronze, obsidian, gold } = props;
  return (
    <div className="resources">
      <div className="resourceLine">{gold}</div>
      <div className="resourceLine">{wood}</div>
      <div className="resourceLine">{iron}</div>
      <div className="resourceLine">{silver}</div>
      <div className="resourceLine">{steel}</div>
      <div className="resourceLine">{copper}</div>
      <div className="resourceLine">{bronze}</div>
      <div className="resourceLine">{obsidian}</div>{" "}
    </div>
  );
};

Resources.propTypes = {};

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
  null
)(Resources);

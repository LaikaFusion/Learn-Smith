import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Resources = props => {
  const { wood, iron, silver, steel, copper, bronze, obsidian, gold } = props;
  return (
    <div className="resources">
      <div className="resourceLine">Gold: {gold}</div>
      <div className="resourceLine">Wood: {wood}</div>
      <div className="resourceLine">Iron: {iron}</div>
      <div className="resourceLine">Silver: {silver}</div>
      <div className="resourceLine">Steel: {steel}</div>
      <div className="resourceLine">Copper: {copper}</div>
      <div className="resourceLine">Bronze: {bronze}</div>
      <div className="resourceLine">Obsidian: {obsidian}</div>{" "}
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
  gold: PropTypes.number.isRequired
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
  null
)(Resources);

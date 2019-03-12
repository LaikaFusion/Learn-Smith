import React, { useState } from "react";
import PropTypes from "prop-types";


const Forges = props => {
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
  const [oreone, setOreone] = useState("wood");
  const [oretwo, setOretwo] = useState("wood");
  const [orethree, setOrethree] = useState("wood");

  const materials = (name, f) => {
    return (
      <select
        onChange={e => {
          f(e.target.value);
        }}
        name={name}
        id="materialOne"
      >
        <option value="wood">Wood</option>
        <option value="copper">Copper</option>
        <option value="iron">Iron</option>
        <option value="steel">Steel</option>
        <option value="obsidian">Obsidian</option>
        <option value="silver">Silver</option>
      </select>
    );
  };

  const makeItem = (oreOne, oreTwo, oreThree) => {};

  return (
    <div className="forge">
      Forge:
      {materials("ore1", setOreone)}
      {materials("ore2", setOretwo)}
      {materials("ore3", setOrethree)}
      <button
        onClick={() => {
          makeItem(oreone, oretwo, orethree);
        }}
      >
        Make
      </button>
      {/* {materials(test)} */}
    </div>
  );
};

Forges.propTypes = {
  wood: PropTypes.number.isRequired,
  iron: PropTypes.number.isRequired,
  steel: PropTypes.number.isRequired,
  silver: PropTypes.number.isRequired,
  copper: PropTypes.number.isRequired,
  bronze: PropTypes.number.isRequired,
  obsidian: PropTypes.number.isRequired,
  gold: PropTypes.number.isRequired,
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
)(Forges);

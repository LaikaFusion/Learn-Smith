import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mapStateToProps, resPropTypes } from "../helpers/stateList";


const Forges = props => {
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

  const makeItemChecks = (oreOne, oreTwo, oreThree) => {
    let checks = false;
    if(oreOne === oreTwo && oreTwo === oreThree && props[oreOne] >= 3 ){
      checks = true
    }
    if(oreOne === oreTwo && props[oreOne] >= 2 && props[oreThree] >=1){
      checks = true
    }
    if(oreOne === oreThree && props[oreOne] >= 2 && props[oreTwo] >=1){
      checks = true
    }
    if(oreOne === oreThree && props[oreOne] >= 2 && props[oreTwo] >=1){
      checks = true
    }
    if(oreTwo === oreThree && props[oreTwo] >= 2 && props[oreOne] >=1){
      checks = true
    }
    if(props[oreOne] >=1&&props[oreTwo]>=1&& props[oreThree] >= 1){
      checks = true
    }
    if(checks){
      makeItem(oreOne,oreTwo,oreThree);
    }
  };
  const makeItem = (oreOne, oreTwo, oreThree)=>{

  }
  return (
    <div className="forge">
      Forge:
      {materials("ore1", setOreone)}
      {materials("ore2", setOretwo)}
      {materials("ore3", setOrethree)}
      <button
        onClick={() => {
          makeItemChecks(oreone, oretwo, orethree);
        }}
      >
        Make
      </button>
      {/* {materials(test)} */}
    </div>
  );
};

Forges.propTypes = {
  ...resPropTypes
};

export default connect(
  mapStateToProps,
  {  }
)(Forges);

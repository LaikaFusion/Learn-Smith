import React, { useState } from "react";
import { connect } from "react-redux";
import {
  mapStateToProps,
  resPropTypes,
  decrementers,
  decPropTypes
} from "../helpers/stateList";
import { lookupWeapon } from "../helpers/weaponGen";
import { inventoryadd } from "../redux/inventoryreducer";
import Countdown from "./Countdown";

const Forges = props => {
  const [oreone, setOreone] = useState("wood");
  const [oretwo, setOretwo] = useState("wood");
  const [orethree, setOrethree] = useState("wood");
  const [countdown, setCountdown] = useState(0);

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
        <option value="iron">Iron</option>
        <option value="silver">Silver</option>
        <option value="steel">Steel</option>
        <option value="copper">Copper</option>
        <option value="obsidian">Obsidian</option>
      </select>
    );
  };

  const makeItemChecks = (oreOne, oreTwo, oreThree) => {
    console.log(countdown);
    if (countdown !== 0) {
      return;
    }
    let checks = false;
    if (oreOne === oreTwo && oreTwo === oreThree && props[oreOne] >= 3) {
      checks = true;
    }
    if (oreOne === oreTwo && props[oreOne] >= 2 && props[oreThree] >= 1) {
      checks = true;
    }
    if (oreOne === oreThree && props[oreOne] >= 2 && props[oreTwo] >= 1) {
      checks = true;
    }
    if (oreOne === oreThree && props[oreOne] >= 2 && props[oreTwo] >= 1) {
      checks = true;
    }
    if (oreTwo === oreThree && props[oreTwo] >= 2 && props[oreOne] >= 1) {
      checks = true;
    }
    if (props[oreOne] >= 1 && props[oreTwo] >= 1 && props[oreThree] >= 1) {
      checks = true;
    }
    if (checks) {
      makeItem(oreOne, oreTwo, oreThree);
    }
  };
  const makeItem = (oreOne, oreTwo, oreThree) => {
    removeResource(oreOne);
    removeResource(oreTwo);
    removeResource(oreThree);
    const weapon = lookupWeapon(oreOne, oreTwo, oreThree);
    setCountdown(5);
    setTimeout(() => {
      addAndReset(weapon);
    }, 5000);
  };
  const addAndReset = weapon => {
    setCountdown(0);
    props.inventoryadd(weapon);
  };
  const removeResource = resource => {
    switch (resource) {
      case "wood":
        props.wooddecrement(1);
        break;
      case "steel":
        props.steeldecrement(1);
        break;
      case "iron":
        props.irondecrement(1);
        break;
      case "copper":
        props.copperdecrement(1);
        break;
      case "obsidian":
        props.obsidiandecrement(1);
        break;
      case "silver":
        props.silverdecrement(1);
        break;
      default:
        // eslint-disable-next-line no-console
        console.log("error");
        break;
    }
  };
  return (
    <div className="forge">
      Forge:
      {materials("ore1", setOreone)}
      {materials("ore2", setOretwo)}
      {materials("ore3", setOrethree)}
      <button
        type="button"
        onClick={() => {
          makeItemChecks(oreone, oretwo, orethree);
        }}
      >
        Make
      </button>
      <Countdown timer={countdown} />
    </div>
  );
};

Forges.propTypes = { ...decPropTypes, ...resPropTypes };

export default connect(
  mapStateToProps,
  { ...decrementers, inventoryadd }
)(Forges);

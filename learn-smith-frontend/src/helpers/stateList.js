import { PropTypes } from "prop-types";
import {
  copperincrement,
  copperdecrement
} from "../redux/resourceIncrimentors/copperreducer";
import {
  woodincrement,
  wooddecrement
} from "../redux/resourceIncrimentors/woodreducer";
import {
  ironincrement,
  irondecrement
} from "../redux/resourceIncrimentors/ironreducer";
import {
  steelincrement,
  steeldecrement
} from "../redux/resourceIncrimentors/steelreducer";
import {
  obsidianincrement,
  obsidiandecrement
} from "../redux/resourceIncrimentors/obsidianreducer";
import {
  silverincrement,
  silverdecrement
} from "../redux/resourceIncrimentors/silverreducer";

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

const resPropTypes = {
  wood: PropTypes.number.isRequired,
  iron: PropTypes.number.isRequired,
  steel: PropTypes.number.isRequired,
  silver: PropTypes.number.isRequired,
  copper: PropTypes.number.isRequired,
  obsidian: PropTypes.number.isRequired
};

const decPropTypes = {
  copperdecrement: PropTypes.func.isRequired,
  wooddecrement: PropTypes.func.isRequired,irondecrement: PropTypes.func.isRequired,
  steeldecrement: PropTypes.func.isRequired,
  silverdecrement: PropTypes.func.isRequired,
  obsidiandecrement: PropTypes.func.isRequired
};

const decrementers = {
  copperdecrement,
  wooddecrement,
  irondecrement,
  steeldecrement,
  silverdecrement,
  obsidiandecrement
};

export { mapStateToProps, resPropTypes, decrementers, decPropTypes };

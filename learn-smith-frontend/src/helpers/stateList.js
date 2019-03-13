import { PropTypes, shape, number, string, oneOf } from 'prop-types';


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
  bronze: PropTypes.number.isRequired,
  obsidian: PropTypes.number.isRequired,
  gold: PropTypes.number.isRequired
};

export { mapStateToProps, resPropTypes };

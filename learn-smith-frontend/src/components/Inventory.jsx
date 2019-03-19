import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Inventory = props => {
  const { inventory } = props;
  return (
    <div className="inventoryContainer">
      Inventory
      <ul className="list">
        {inventory.map((e, i) => {
          return <li>{e.name}</li>;
        })}
      </ul>
    </div>
  );
};

Inventory.propTypes = {
  inventory: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  inventory: state.inventory
});

export default connect(
  mapStateToProps,
  null
)(Inventory);

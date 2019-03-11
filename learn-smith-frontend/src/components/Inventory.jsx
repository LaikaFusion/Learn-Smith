import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Inventory=(props)=> {
  const {inventory} = props;
  return (
    <div className="inventoryContainer">
      {inventory.map((e,i)=>{
        return e
      })}
    </div>
  )
}

Inventory.propTypes = {
 inventory = PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  inventory: state.inventory
});

export default connect(
  mapStateToProps,
  null
)(Inventory);

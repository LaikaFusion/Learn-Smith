import React from "react";
import PropTypes from "prop-types";

const CustomerCard = props => {
  const { nameStr, requestStr, goldValInt } = props;
  return (
    <div className="customerCard">
      <div className="customerCardName">{nameStr}</div>
      <div className="customerWeaponName">{requestStr}</div>
      <div className="customerWeaponValue">{goldValInt}</div>

    </div>
  );
};

CustomerCard.propTypes = {
  nameStr: PropTypes.string.isRequired,
  requestStr: PropTypes.string.isRequired,
  goldValInt: PropTypes.number.isRequired
};

export default CustomerCard;

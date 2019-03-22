import React from "react";
import PropTypes from "prop-types";
import { haveWeapon } from "../helpers/customerGen"

const CustomerCard = props => {
  const { nameStr, request, goldValInt, custID } = props;
  const fillOrder = () =>{
    console.log(haveWeapon(request, custID)); 
  }
  return (
    <div className="customerCard">
      <div className="customerCardName">{nameStr}</div>
      <div className="customerWeaponName">{request.name}</div>
      <div className="customerWeaponValue">{goldValInt}</div>
      <button onClick={fillOrder}>Fill Order</button>
    </div>
  );
};

CustomerCard.propTypes = {
  nameStr: PropTypes.string.isRequired,
  requestStr: PropTypes.object.isRequired,
  goldValInt: PropTypes.number.isRequired
};

export default CustomerCard;

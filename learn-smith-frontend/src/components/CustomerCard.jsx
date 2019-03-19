import React from "react";
import PropTypes from "prop-types";

const CustomerCard = props => {
  const { name, request } = props;
  return (
    <div className="customerCard">
      <div className="customerCardName">{name}</div>
      <div className="customerCardName">{request}</div>
    </div>
  );
};

CustomerCard.propTypes = {
  name: PropTypes.string.isRequired,
  request: PropTypes.string.isRequired
};

export default CustomerCard;

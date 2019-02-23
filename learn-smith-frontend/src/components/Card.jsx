import React from "react";
import PropTypes from "prop-types";

export default function Card(props) {
  const { children } = props;
  return <div className="card">{children}</div>;
}
Card.propTypes = {
  children: PropTypes.node.isRequired
};

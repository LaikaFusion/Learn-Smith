import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Customers = props => {
  const { customers } = props;
  return <div className="customersRow">{customers}</div>;
};

Customers.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  customers: state.customers.list
});

export default connect(
  mapStateToProps,
  null
)(Customers);

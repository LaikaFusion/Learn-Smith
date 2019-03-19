import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { weaponRecipe } from "../helpers/weaponGen";

//  https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Customers = props => {
  const { customers, inventory } = props;
  useInterval(() => {
    if (customers.length <= 5) {
      console.log(weaponRecipe());
    }
  }, 2000);
  return <div className="customersRow">test</div>;
};

Customers.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.object).isRequired,
  inventory: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  customers: state.customers.list,
  inventory: state.inventory.list
});

export default connect(
  mapStateToProps,
  null
)(Customers);

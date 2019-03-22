import React from "react";
import PropTypes from "prop-types";
import Forge from "./Forge";
import forgeadd from "../redux/forgereducer";

const Forges = ({ forges }) => {
  return (
    <div>
      {forges.map((e, i) => {
        return <Forge key={e.id} />;
      })}
    </div>
  );
};

Forges.propTypes = {
  forges: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  forges: state.forges.list
});

export default connect(
  mapStateToProps,
  { forgeadd }
)(Forges);

import React from 'react';
import PropTypes from 'prop-types';

function Neo({ dataNeo }) {
  const neoStyle = {
    gridRow: dataNeo.indiceMagnitude,
    gridColumn: dataNeo.indiceDistance
  };
  return (
    <button type="submit" className={dataNeo.name} style={neoStyle}>
      Un astéroïde
    </button>
  );
}
Neo.propTypes = {
  dataNeo: PropTypes.shape.isRequired
};

export default Neo;

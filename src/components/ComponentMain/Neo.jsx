import React from 'react';
import PropTypes from 'prop-types';

function Neo({ dataNeo, magnitudeTab, maxDistance }) {
  const top = (dataNeo.magnitude / magnitudeTab) * 100;
  const left = (dataNeo.distanceLunar / maxDistance) * 100;
  const neoStyle = {
    position: 'relative',
    top: `${top}px`,
    left: `${left}px`,
    margin: '30px'
  };
  return (
    <button type="submit" className={dataNeo.name} style={neoStyle}>
      Un astéroïde
    </button>
  );
}
Neo.propTypes = {
  dataNeo: PropTypes.shape.isRequired,
  magnitudeTab: PropTypes.number.isRequired,
  maxDistance: PropTypes.number.isRequired
};

export default Neo;

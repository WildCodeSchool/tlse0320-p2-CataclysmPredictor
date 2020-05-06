import React from 'react';
import PropTypes from 'prop-types';
import meteor from '../../img/meteor.png';
import './mainApp.css';

function Neo({ dataNeo }) {
  const defSize = size => {
    if (size < 7 && size >= 3) {
      return 45;
    }
    if (size < 3) {
      return 35;
    }
    return 55;
  };
  const neoStyle = {
    width: defSize(dataNeo.indiceSize),
    gridRow: dataNeo.indiceMagnitude,
    gridColumn: dataNeo.indiceDistance
  };
  return <img className="spin" src={meteor} alt={dataNeo.name} style={neoStyle} />;
}
Neo.propTypes = {
  dataNeo: PropTypes.shape.isRequired
};

export default Neo;

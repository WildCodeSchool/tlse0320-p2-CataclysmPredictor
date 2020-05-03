import React from 'react';
import PropTypes from 'prop-types';
import meteor from '../../img/meteor.png';
import './mainApp.css';

function Neo({ dataNeo }) {
  const neoStyle = {
    gridRow: dataNeo.indiceMagnitude,
    gridColumn: dataNeo.indiceDistance
  };
  return <img className="spin" src={meteor} alt="un meteor" style={neoStyle} width="30px" />;
}
Neo.propTypes = {
  dataNeo: PropTypes.shape.isRequired
};
/*    <button type="submit" className={dataNeo.name} style={neoStyle}>
      Un astéroïde
    </button> */

export default Neo;

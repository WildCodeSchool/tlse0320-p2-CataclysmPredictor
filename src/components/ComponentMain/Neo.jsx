import React, { useState } from 'react';
import PropTypes from 'prop-types';
import meteor from '../../img/meteor.png';
import MiniId from '../Id/MiniId';
import './mainApp.css';
import './GlobalContainer.css';

function Neo({ dataNeo, showAlert, infoNeoActive, neoClick }) {
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
    width: `${defSize(dataNeo.indiceSize)}px`,
    gridRow: dataNeo.indiceMagnitude,
    gridColumn: dataNeo.indiceDistance
  };
  const [miniID, displayMiniId] = useState(false);
  return (
    <div className="text-flicker-in-glow" style={neoStyle}>
      <button
        type="submit"
        className="fake-button"
        onClick={() => {
          neoClick();
          displayMiniId(miniID);
        }}
        onMouseOver={() => {
          showAlert();
          infoNeoActive(dataNeo);
          displayMiniId(!miniID);
        }}
        onFocus={() => {
          showAlert();
          infoNeoActive(dataNeo);
          displayMiniId(!miniID);
        }}
        onMouseOut={() => {
          showAlert();
          displayMiniId(!miniID);
        }}
        onBlur={() => {
          showAlert();
          displayMiniId(!miniID);
        }}
      >
        <img
          className="spin focus"
          src={meteor}
          alt={dataNeo.name}
          width={defSize(dataNeo.indiceSize)}
        />
      </button>
      {miniID ? <MiniId dataNeo={dataNeo} /> : null}
    </div>
  );
}
Neo.propTypes = {
  dataNeo: PropTypes.shape.isRequired,
  showAlert: PropTypes.func.isRequired,
  infoNeoActive: PropTypes.func.isRequired,
  neoClick: PropTypes.func.isRequired
};

export default Neo;

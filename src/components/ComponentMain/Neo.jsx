import React, { useState } from 'react';
import PropTypes from 'prop-types';
import meteor from '../../img/meteor.png';
import './mainApp.css';
import './GlobalContainer.css';
import Id from '../Id/Id';
import MiniId from '../Id/MiniId';

function Neo({ dataNeo, showAlert }) {
  const [displayID, setDisplayID] = useState(false);
  const [displayMiniId, setDisplayMiniId] = useState(false);
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
  return (
    <div style={neoStyle}>
      <button
        type="submit"
        className="fake-button"
        onClick={() => setDisplayID(!displayID)}
        onMouseOver={() => {
          setDisplayMiniId(!displayMiniId);
          showAlert();
        }}
        onFocus={() => {
          setDisplayMiniId(!displayMiniId);
          showAlert();
        }}
        onMouseOut={() => {
          setDisplayMiniId(!displayMiniId);
          showAlert();
        }}
        onBlur={() => {
          setDisplayMiniId(!displayMiniId);
          showAlert();
        }}
      >
        <img className="spin" src={meteor} alt={dataNeo.name} width={defSize(dataNeo.indiceSize)} />
      </button>
      {displayMiniId ? <MiniId dataNeo={dataNeo} /> : null}
      {displayID ? <Id dataNeo={dataNeo} setDisplay={() => setDisplayID(!displayID)} /> : null}
    </div>
  );
}
Neo.propTypes = {
  dataNeo: PropTypes.shape.isRequired,
  showAlert: PropTypes.func.isRequired
};

export default Neo;

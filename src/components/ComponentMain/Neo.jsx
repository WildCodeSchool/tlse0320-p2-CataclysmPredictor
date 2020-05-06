import React, { useState } from 'react';
import PropTypes from 'prop-types';
import meteor from '../../img/meteor.png';
import './mainApp.css';
import './GlobalContainer.css';
import Id from '../Id/Id';

function Neo({ dataNeo }) {
  const [displayID, setDisplay] = useState(false);
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
      <img
        className="spin"
        src={meteor}
        alt={dataNeo.name}
        onClick={() => setDisplay(!displayID)}
        width={defSize(dataNeo.indiceSize)}
      />
      {displayID ? <Id dataNeo={dataNeo} setDisplay={() => setDisplay(!displayID)} /> : null}
    </div>
  );
}
Neo.propTypes = {
  dataNeo: PropTypes.shape.isRequired
};

export default Neo;

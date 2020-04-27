import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Id from '../Id/Id';

function Neo({ dataNeo }) {
  const [displayID, setDisplay] = useState(false);
  return (
    <div>
      <button type="submit" onClick={() => setDisplay(!displayID)}>
        Un astéroïde
      </button>
      {displayID ? <Id dataNeo={dataNeo} /> : null}
    </div>
  );
}

Neo.propTypes = {
  dataNeo: PropTypes.shape.isRequired
};

export default Neo;

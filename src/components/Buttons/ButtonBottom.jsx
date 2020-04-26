import React from 'react';
import PropTypes from 'prop-types';

function ButtonBottom({ handleDisplayContent, panelToHandle, name }) {
  return (
    <div>
      <button
        type="submit"
        className="button-nav"
        value={name}
        onClick={() => handleDisplayContent(panelToHandle)}
      >
        {name}
      </button>
    </div>
  );
}
ButtonBottom.propTypes = {
  name: PropTypes.string.isRequired,
  panelToHandle: PropTypes.string.isRequired,
  handleDisplayContent: PropTypes.func.isRequired
};

export default ButtonBottom;

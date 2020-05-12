import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, periodeChecked }) {
  return (
    <div>
      <button type="button" className="button-nav" onClick={periodeChecked}>
        {name}
      </button>
    </div>
  );
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
  periodeChecked: PropTypes.shape.isRequired
};

export default Button;

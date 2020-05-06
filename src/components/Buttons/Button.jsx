import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, periodeCheck }) {
  return (
    <div>
      <button type="button" className="button-nav" onClick={periodeCheck}>
        {name}
      </button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  periodeCheck: PropTypes.func.isRequired
};

export default Button;

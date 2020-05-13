import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, handleCheckedButton, buttonActive }) {
  return (
    <div>
      <button
        type="button"
        className="button-nav"
        onClick={() => handleCheckedButton(buttonActive)}
      >
        {name}
      </button>
    </div>
  );
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleCheckedButton: PropTypes.func.isRequired,
  buttonActive: PropTypes.string.isRequired
};

export default Button;

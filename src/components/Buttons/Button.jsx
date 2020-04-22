import React from 'react';

function Button({ name }) {
  return (
    <div>
      <button type="button" className="button-nav">
        {name}
      </button>
    </div>
  );
}

export default Button;

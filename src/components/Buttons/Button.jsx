import React from 'react';

function Button({ name, periodeCheck }) {
  return (
    <div>
      <button type="button" className="button-nav" onClick={periodeCheck}>
        {name}
      </button>
    </div>
  );
}

export default Button;

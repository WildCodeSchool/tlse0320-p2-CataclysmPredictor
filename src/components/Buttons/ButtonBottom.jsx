import React from 'react';

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

export default ButtonBottom;

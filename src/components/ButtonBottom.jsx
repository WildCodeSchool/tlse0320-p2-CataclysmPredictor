import React from 'react';

function ButtonBottom({ handleDisplayContent, panelToHandle, name }) {
  return (
    <div>
      <button type="submit" value="item" onClick={() => handleDisplayContent(panelToHandle)}>
        {name}
      </button>
    </div>
  );
}

export default ButtonBottom;

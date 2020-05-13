import React, { useState } from 'react';
import FooterContent from '../ComponentBottom/FooterContent';

function ButtonBottom() {
  const [displayFooter, setDisplayFooter] = useState(false);
  return (
    <div>
      <button type="submit" className="button-nav" onClick={() => setDisplayFooter(!displayFooter)}>
        Menu
      </button>
      {displayFooter ? <FooterContent /> : null}
    </div>
  );
}

export default ButtonBottom;

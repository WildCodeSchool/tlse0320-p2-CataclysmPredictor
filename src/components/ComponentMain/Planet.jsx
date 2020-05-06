import React from 'react';
import './mainApp.css';

function Planets() {
  return (
    <div className="contentSphere">
      <div className="sphere moon rotate" />
      <div className="sphere rotate earth" />
    </div>
  );
}

export default Planets;

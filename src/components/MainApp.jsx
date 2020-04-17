import React from 'react';
import './mainApp.css';

function MainApp() {
  return (
    <div className="contentSphere">
      <div className="sphere moon rotate" />
      <div className="sphere rotate earth" />
    </div>
  );
}

export default MainApp;

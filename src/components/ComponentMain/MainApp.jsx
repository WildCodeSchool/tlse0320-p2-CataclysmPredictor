import React from 'react';
import './mainApp.css';
import Sort from './Sort';

function MainApp() {
  return (
    <div className="contentSphere">
      <Sort />
      <div className="sphere moon rotate"></div>
      <div className="sphere rotate earth"></div>
    </div>
  );
}

export default MainApp;

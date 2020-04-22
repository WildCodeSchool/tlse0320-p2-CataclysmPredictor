import React from 'react';
import Button from './Button';
import './Buttons.css';

const UpButtons = () => {
  return (
    <div className="upButtons">
      <Button name="Période" className="calendar" />
      <Button name="Les plus gros" className="big" />
      <Button name="Les plus proches" className="close" />
      <Button name="Les plus dangereux" className="dangerous" />
    </div>
  );
};

export default UpButtons;

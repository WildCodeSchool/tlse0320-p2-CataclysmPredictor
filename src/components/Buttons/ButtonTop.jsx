import React from 'react';
import Button from './Button';
import './Buttons.css';

const UpButtons = ({ periodeChecked }, { biggerChecked }) => {
  return (
    <div className="upButtons">
      <Button name="Période" className="calendar" periodeCheck={periodeChecked} />
      <Button name="Les plus gros" className="big" bigger={biggerChecked} />
      <Button name="Les plus proches" className="close" />
      <Button name="Les plus dangereux" className="dangerous" />
    </div>
  );
};

export default UpButtons;

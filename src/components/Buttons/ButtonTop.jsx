import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Buttons.css';

const UpButtons = ({ periodeChecked }) => {
  return (
    <div className="upButtons">
      <Button name="Période" className="calendar" periodeChecked={periodeChecked} />
      <Button name="Les plus gros" className="big" />
      <Button name="Les plus proches" className="close" />
      <Button name="Les plus dangereux" className="dangerous" />
    </div>
  );
};
UpButtons.propTypes = {
  periodeChecked: PropTypes.shape.isRequired
};

export default UpButtons;

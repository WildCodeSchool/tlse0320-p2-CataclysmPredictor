import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Buttons.css';

const UpButtons = ({ handleCheckedButton }) => {
  return (
    <div className="upButtons">
      <Button
        name="Période"
        className="calendar"
        handleCheckedButton={handleCheckedButton}
        buttonActive="isPeriodeChecked"
      />
      <Button
        name="Les plus gros"
        className="big"
        handleCheckedButton={handleCheckedButton}
        buttonActive="isBiggerChecked"
      />
      <Button
        name="Les plus proches"
        className="close"
        handleCheckedButton={handleCheckedButton}
        buttonActive="isCloserChecked"
      />
      <Button
        name="Les plus dangereux"
        className="dangerous"
        handleCheckedButton={handleCheckedButton}
        buttonActive="isDangerousChecked"
      />
    </div>
  );
};
UpButtons.propTypes = {
  handleCheckedButton: PropTypes.func.isRequired
};

export default UpButtons;

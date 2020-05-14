import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Buttons.css';
import ButtonBottom from './ButtonBottom';

const UpButtons = ({ handleCheckedButton }) => {
  return (
    <div className="button-block">
      <ButtonBottom name="Menu" />
      <p>Choisir une date :</p>
      <Button
        name="Calendrier"
        className="calendar"
        handleCheckedButton={handleCheckedButton}
        buttonActive="isPeriodeChecked"
      />
      <p>Voir dans le mois :</p>
      <Button
        name="les plus gros"
        className="big"
        handleCheckedButton={handleCheckedButton}
        buttonActive="isBiggerChecked"
      />
      <Button
        name="les plus proche"
        className="close"
        handleCheckedButton={handleCheckedButton}
        buttonActive="isCloserChecked"
      />
    </div>
  );
};
UpButtons.propTypes = {
  handleCheckedButton: PropTypes.func.isRequired
};

export default UpButtons;

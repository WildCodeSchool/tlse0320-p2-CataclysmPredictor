import React from 'react';
import PropTypes from 'prop-types';
import '../ComponentMain/GlobalContainer.css';

function Id({ dataNeo, setDisplay }) {
  return (
    <div className="border position padding layout1">
      <table className="color table">
        <thead>
          <tr>
            <td>
              <h2 className="color">Informations</h2>
            </td>
            <td>
              <button type="submit" className="color fake-button" onClick={setDisplay}>
                close [X]
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nom :</td>
            <td>{dataNeo.name}</td>
          </tr>
          <tr>
            <td>Diamètre :</td>
            <td>{`${dataNeo.size} Km`}</td>
            <td>soit ....</td>
          </tr>
          <tr>
            <td>Vitesse :</td>
            <td>{`${dataNeo.speed} Km/h`}</td>
          </tr>
          <tr>
            <td>Date d approche :</td>
            <td>{dataNeo.closeDate}</td>
          </tr>
          <tr>
            <td>Distance :</td>
            <td>{`${dataNeo.distanceKm} Km`}</td>
            <td>{`${dataNeo.distanceLunar} Terre=>Lune`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
Id.propTypes = {
  dataNeo: PropTypes.shape.isRequired,
  setDisplay: PropTypes.func.isRequired
};

export default Id;

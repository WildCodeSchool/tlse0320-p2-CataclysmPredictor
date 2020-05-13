import React from 'react';
import PropTypes from 'prop-types';
import '../ComponentMain/GlobalContainer.css';
import '../ComponentMain/animation.css';

function Id({ dataNeo, neoClick }) {
  return (
    <div className="border position padding layout1 scale-in-hor-center">
      <table className="color table">
        <thead>
          <tr>
            <td>
              <h2 className="color">Informations</h2>
            </td>
            <td>
              <button type="submit" className="color fake-button" onClick={() => neoClick()}>
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
          </tr>
          <tr>
            <td>Vitesse :</td>
            <td>{`${dataNeo.speed} Km/h`}</td>
          </tr>
          <tr>
            <td>Date d&apos; approche :</td>
            <td>{dataNeo.closeDate}</td>
          </tr>
          <tr>
            <td>Distance :</td>
            <td>{`${dataNeo.distanceKm} Km`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
Id.propTypes = {
  dataNeo: PropTypes.shape.isRequired,
  neoClick: PropTypes.shape.isRequired
};

export default Id;

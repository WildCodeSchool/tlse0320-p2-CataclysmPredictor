import React from 'react';
import PropTypes from 'prop-types';
import '../ComponentMain/GlobalContainer.css';

function MiniId({ dataNeo }) {
  return (
    <div className="absolute border layout1">
      <table className="color table">
        <tbody>
          <tr>
            <td>Nom : </td>
            <td>{dataNeo.name}</td>
          </tr>
          <tr>
            <td>Date approche : </td>
            <td>{dataNeo.closeDate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

MiniId.propTypes = {
  dataNeo: PropTypes.shape.isRequired
};

export default MiniId;

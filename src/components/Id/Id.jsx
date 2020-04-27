import React from 'react';
import PropTypes from 'prop-types';
import '../ComponentBottom/Content.css';

function Id({ dataNeo }) {
  return (
    <div className="heigth">
      <h1>Informations sur cet astéroïde :</h1>
      <ul>
        <li>{`Nom :${dataNeo.name}`}</li>
        <li>
          <img src="image" alt="astéroïde" />
        </li>
        <li>{`Taille :${dataNeo.size}`}</li>
        <li>{`Vitesse relative :${dataNeo.speed}`}</li>
        <li>{`Date d&#39; approche :${dataNeo.closeDate}`}</li>
        <li>{`Distance de passage en Km :${dataNeo.distanceKm}`}</li>
        <li>{`Distance de passagelune :${dataNeo.distanceLunar}`}</li>
      </ul>
    </div>
  );
}
Id.propTypes = {
  dataNeo: PropTypes.shape.isRequired
};

export default Id;

/* 
créer la carte d'identité 
avec
- nom
- image random 
-taille : en chiffre et en comparaison monument 
-vitesse relative
-date d'approche full avec l'h 
- distance de passage : en km, en distance Terre / Lune

*/

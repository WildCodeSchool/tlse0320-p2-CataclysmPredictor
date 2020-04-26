import React from 'react';
import PropTypes from 'prop-types';
import '../ComponentBottom/Content.css';

function Id({ dataFormated }) {
  return (
    <div className="heigth">
      <h1>Informations sur cet astéroïde :</h1>
      <ul>
        <li>{`Nom :${dataFormated[0].name}`}</li>
        <li>
          <img src="image" alt="astéroïde" />
        </li>
        <li>{`Taille :${dataFormated[0].size}`}</li>
        <li>{`Vitesse relative :${dataFormated[0].speed}`}</li>
        <li>{`Date d&#39; approche :${dataFormated[0].closeDate}`}</li>
        <li>{`Distance de passage en Km :${dataFormated[0].distanceKm}`}</li>
        <li>{`Distance de passagelune :${dataFormated[0].distanceLunar}`}</li>
      </ul>
    </div>
  );
}
Id.propTypes = {
  dataFormated: PropTypes.shape.isRequired,
  size: PropTypes.number.isRequired
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

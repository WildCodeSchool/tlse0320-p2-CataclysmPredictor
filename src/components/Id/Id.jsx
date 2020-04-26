import React from 'react';
import '../ComponentBottom/Content.css';

function Id() {
  return (
    <div className="heigth">
      <h1>Informations sur cet astéroïde :</h1>
      <ul>
        <li>Nom :</li>
        <li>
          <img src="image" alt="astéroïde" />
        </li>
        <li>Taille :</li>
        <li>Vitesse relative :</li>
        <li>Date d&#39; approche :</li>
        <li>Distance de passage :</li>
      </ul>
    </div>
  );
}

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

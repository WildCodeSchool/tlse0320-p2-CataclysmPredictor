import React from 'react';
import './Content.css';
import { Link } from 'react-router-dom';

function Presentation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <h2>Qui sommes-nous ?</h2>
      <p>
        Nous sommes 4 étudiants en développement web JavaScript, React et NodeJS à la
        <a href="https://www.wildcodeschool.com/fr-FR">Wild Code School</a>
      </p>
      <ul>
        <li>
          <a href="https://github.com/Justine810">Justine</a>
        </li>
        <li>
          <a href="https://github.com/Mr-gateau">Nicolas</a>
        </li>
        <li>
          <a href="https://github.com/Anthony31400">Anthony</a>
        </li>
        <li>
          <a href="https://github.com/Alpasc">Aline</a>
        </li>
      </ul>
    </div>
  );
}

export default Presentation;

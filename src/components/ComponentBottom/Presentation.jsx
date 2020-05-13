import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';
import anthony from '../../img/anthony.png';
import justine from '../../img/justine.png';
import '../ComponentMain/GlobalContainer.css';

function Presentation() {
  return (
    <div className="article-content color-text">
      <h2>Qui sommes-nous ?</h2>
      <p>
        Nous sommes 4 étudiants en développement web JavaScript, React et NodeJS à la
        <a
          className="link underline"
          href=" https://www.wildcodeschool.com/fr-FR"
          rel="noopener noreferrer"
          target="_blank"
        >
          Wild Code School
        </a>
      </p>
      <ul>
        <li>
          <img src={justine} alt="avatar" className="avatar" />
          <a
            className="link underline"
            href="https://github.com/Justine810"
            rel="noopener noreferrer"
            target="_blank"
          >
            Justine
          </a>
        </li>
        <li>
          <a
            className="link underline"
            href="https://github.com/Mr-gateau"
            rel="noopener noreferrer"
            target="_blank"
          >
            Nicolas
          </a>
        </li>
        <li>
          <img src={anthony} alt="avatar" className="avatar" />
          <a
            className="link underline"
            href="https://github.com/Anthony31400"
            rel="noopener noreferrer"
            target="_blank"
          >
            Anthony
          </a>
        </li>
        <li>
          <a
            className="link underline"
            href="https://github.com/Alpasc"
            rel="noopener noreferrer"
            target="_blank"
          >
            Aline
          </a>
        </li>
      </ul>
      <Link className="link block border" to="/">
        Revenir à la page d&apos; accueil
      </Link>
    </div>
  );
}

export default Presentation;

import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';
import anthony from '../../img/anthony.png';
import justine from '../../img/justine.png';
import nicolas from '../../img/nicolas.png';
import aline from '../../img/aline.png';
import '../ComponentMain/GlobalContainer.css';
import '../ComponentMain/animation.css';

function Presentation() {
  return (
    <div className="article-content color-text scale-in-hor-center">
      <h2>Qui sommes-nous ?</h2>
      <p>
        Nous sommes 4 étudiants en développement web JavaScript à la&#141;
        <a
          className="link underline"
          href=" https://www.wildcodeschool.com/fr-FR"
          rel="noopener noreferrer"
          target="_blank"
        >
          Wild Code School
        </a>
      </p>
      <ul className="flex list space-between">
        <li className="column">
          <h3>Justine</h3>
          <img src={justine} alt="avatar" className="avatar" />
          <a
            className="link underline"
            href="https://github.com/Justine810"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
          <a
            className="link underline"
            href="https://www.linkedin.com/in/justine-gautreau-20367192/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li className="column">
          <h3>Nicolas</h3>
          <img src={nicolas} alt="avatar" className="avatar" />
          <a
            className="link underline"
            href="https://github.com/Mr-gateau"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
          <a
            className="link underline"
            href="https://www.linkedin.com/in/nicolas-tagot-b51882aa/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li className="column">
          <h3>Anthony</h3>
          <img src={anthony} alt="avatar" className="avatar" />
          <a
            className="link underline"
            href="https://github.com/Anthony31400"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
          <a
            className="link underline"
            href="https://www.linkedin.com/in/anthony-gensane-92795452/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li className="column">
          <h3>Aline</h3>
          <img src={aline} alt="avatar" className="avatar" />
          <a
            className="link underline"
            href="https://github.com/Alpasc"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
          <a
            className="link underline"
            href="https://www.linkedin.com/in/aline-pascal-de-raykeer-493862177/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
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

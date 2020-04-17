import React from 'react';
import './FooterContent.css';

function FooterContent() {
  return (
    <div className="footer">
      <ul className="list-none">
        <li className="marge-large">
          <a href="out" className="link">
            Mentions légales
          </a>
        </li>
        <li className="marge-large">
          <a href="out" className="link">
            Nous Contacter
          </a>
        </li>
        <li className="marge-large">
          <a href="out" className="link">
            Qui sommes nous ?
          </a>
        </li>
      </ul>
      <ul className="list-none">
        <li className="marge-large link">Nous rejoindre</li>
        <li className="marge-large inline">
          <img src="" alt="Facebook" />
        </li>
        <li className="marge-large inline">
          <img src="./img/twitter.png" alt="Tweeter" />
        </li>
      </ul>
    </div>
  );
}

export default FooterContent;

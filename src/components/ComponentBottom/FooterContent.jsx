import React from 'react';
import './Content.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function FooterContent() {
  return (
    <Router>
      <div className="footer">
        <ul className="list-none">
          <li className="marge-large">
            <Link to="/article-asteroide" className="link">
              Qu&apos; est ce qu&apos; un astéroïde ?
            </Link>
          </li>
          <li className="marge-large">
            <Link to="/article-scenarios" className="link">
              Retour sur l&apos; extinction des dinosaures
            </Link>
          </li>
          <li className="marge-large">
            <Link to="/mentions-legales" className="link">
              Mentions Légales
            </Link>
          </li>
          <li className="marge-large">
            <Link to="/presentation" className="link">
              Qui sommes-nous ?
            </Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default FooterContent;

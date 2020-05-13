import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';
import '../ComponentMain/GlobalContainer.css';

function LegalMentions() {
  return (
    <div className="article-content color-text">
      <h2>Conditions d&apos; utilisation</h2>
      <p>
        Ce site est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…) pour un
        meilleur confort d’utilisation et un graphisme plus agréable, nous vous recommandons de
        recourir à des navigateurs modernes comme Internet explorer, Safari, Firefox, Google Chrome,
        etc…
      </p>
      <p>
        <bold>Liens hypertextes :</bold>
        Les sites internet de peuvent offrir des liens vers d’autres sites internet ou d’autres
        ressources disponibles sur Internet. CATACLYSM PREDICTOR ne dispose d’aucun moyen pour
        contrôler les sites en connexion avec ses sites internet. ne répond pas de la disponibilité
        de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue pour
        responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces
        sites ou sources externes, et notamment des informations, produits ou services qu’ils
        proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette
        utilisation incombent pleinement à l’internaute, qui doit se conformer à leurs conditions
        d’utilisation.
      </p>
      <Link className="link block border" to="/">
        Revenir à la page d&apos; accueil
      </Link>
    </div>
  );
}

export default LegalMentions;

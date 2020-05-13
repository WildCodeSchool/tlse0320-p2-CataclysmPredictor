import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';
import '../ComponentMain/GlobalContainer.css';
import planets from '../../img/planets.jpg';

function ArticleContent() {
  return (
    <div>
      <Link to="/">Home</Link>
      <article className="article-content">
        <h2 className="title">Définition</h2>
        <p className="chapeau">
          Un astéroïde est un corps céleste composé de roches et de métaux, dont la taille peut
          aller de quelques centimètres à plusieurs kilomètres. Contrairement à ce que l&apos; on
          pense, il n&apos; erre pas de façon erratique dans l&apos; espace, mais tourne autour
          d&apos; une étoile. La naissance des astéroïdes remonte aux origines de notre Système
          solaire, il y a 4,56 milliards d&apos; années. L&apos; hypothèse la plus communément
          admise aujourd&apos; hui est qu&apos; ils résultent de fragments de roche qui n&apos; ont
          pas pu s&apos; agglomérer pour former une planète, en raison notamment de l&apos;
          influence de Jupiter. Les astéroïdes sont parfois appelés planète mineure.
        </p>
        <img className="planetsimg" src={planets} alt="planètes" />
        <h2>Les familles d&apos; astéroïdes</h2>
        <p className="chapeau">
          Le premier astéroïde, Cérès, a été découvert en 1801 par Giuseppe Piazzi, alors directeur
          de l&apos; observatoire de Palerme, en Sicile. Depuis, on en a dénombré plus de 523.000,
          dont la majorité se situe dans la zone comprise entre Mars et Jupiter, appelée la ceinture
          d’astéroïdes. D&apos; autres astéroïdes sont découverts en dehors de cette zone, soit
          parce qu&apos; sils possèdent une orbite qui les fait s&apos; éloigner de la ceinture
          principale, soit parce qu&apos; ils sont dans une autre zone du Système solaire.
        </p>
        <h4>On distingue notamment :</h4>
        <ul>
          <li className="marge-large">
            Les Troyens, qui circulent sur l&apos; orbite de planètes, la plupart autour de Jupiter
            mais Mars, Uranus et Neptune en possèdent également quelques-uns.
          </li>
          <li className="marge-large">
            Les Centaures, généralement de petite taille, qui tournent autour du Soleil entre les
            orbites de Jupiter et de Neptune.
          </li>
          <li className="marge-large">
            Les transneptuniens, qui circulent sur une orbite très excentrique. On retrouve dans
            cette catégorie les astéroïdes de la Ceinture de Kuiper, une zone annulaire à l&apos;
            instar de la Ceinture d&apos; astéroïdes mais 20 fois plus étendue.
          </li>
          <li className="marge-large">
            Les astéroïdes géocroiseurs, quant à eux, évoluent à proximité de la Terre. De par leurs
            trajectoires qui croisent l&apos; orbite terrestre, ces objets sont traqués afin de
            mieux les identifier et prévenir d&apos; une collision avec notre planète. Il en
            existerait plus de 10.000. Heureusement, le risque de collision est relativement faible
            : une météorite de la taille d&apos; un stade de football, susceptible de dévaster la
            zone d&apos; impact et ses environs s&apos; écrase en moyenne tous les 2.000 ans. Quant
            aux gros astéroïdes comme, par exemple, celui qui a provoqué la disparition des
            dinosaures, il y a 66 millions d&apos; années, la moyenne estimée est d&apos; un tous
            les 100 millions d&apos; années. Désormais, ces astéroïdes géocroiseurs sont surveillés
            étroitement par la Nasa.
          </li>
        </ul>
        <a
          className="link underline"
          href="https://www.futura-sciences.com/sciences/definitions/asteroide-asteroide-870/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Source
        </a>
        <Link className="link block border" to="/">
          Revenir à la page d&apos; accueil
        </Link>
      </article>
    </div>
  );
}

export default ArticleContent;

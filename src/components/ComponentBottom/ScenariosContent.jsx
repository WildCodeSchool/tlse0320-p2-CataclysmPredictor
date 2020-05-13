import React from 'react';
import './Content.css';
import '../ComponentMain/GlobalContainer.css';
import { Link } from 'react-router-dom';
import dino from '../../img/dino.jpg';
import asteroide2 from '../../img/asteroide2.jpg';

function ScenariosContent() {
  return (
    <div>
      <article className="article-content color-text">
        <h1 className="title">Scénarios catastrophes</h1>
        <p className="chapeau">
          Dans cet article, nous rentrons dans le domaine des suppositions. Les scénarios proposés
          ne sont donc que des possibilités et ne correspondent pas à une vérité scientifique
          immuable. Les scientifiques qui ont travaillé à la reconstitution des événements se sont
          heurtés à limpossibilité de procéder par analogie, puisque aucun autre exemple de
          phénomène d&apos; impact d&apos; une ampleur comparable n&apos; est connu. Les modèles
          d&apos; impact d&apos; objets de petites dimensions donnent quelques indications sur les
          effets environnementaux, mais les extrapolations à des objets de plusieurs kilomètres de
          diamètre sont incertaines.
        </p>
        <h2>Effets d&apos; un impact d&apos; astéroïde selon son diamètre</h2>
        <div className="asteroide-container">
          <img className="asteroide2" src={asteroide2} alt="asteroide" />
          <div>
            <p>
              Les effets dévastateurs d&apos; un impact augmentent évidemment selon le diamètre de
              l&apos; impacteur et les estimations sont les suivantes :
            </p>
            <ul>
              <li className="marge-large">
                De 1 à 9 mètres de diamètre (fréquence de collision = en moyenne 1 par an) : dégâts
                locaux.
              </li>
              <li className="marge-large">
                De 10 à 100 mètres (1 tous les 100 à 10.000 ans) : dégâts à l&apos; échelle d&apos;
                une région, avec un cratère important.
              </li>
              <li className="marge-large">
                De 100 mètres à 1 kilomètre (1 tous les 10.000 à 100.000 ans) : dégâts à l&apos;
                échelle d&apos; un continent, donc théoriquement repérables au cours des temps
                géologiques.
              </li>
            </ul>
          </div>
        </div>
        <h2>Retour sur l&apos; extinction des dinosaures</h2>
        <div className="dino-container">
          <img className="dino" src={dino} alt="extinction des dinosaures" />
          <p>
            L&apos; objet céleste qui a frappé la Terre il y a 65 millions d&apos; années était
            encore plus gros, puisqu&apos; il mesurait probablement 10 kilomètres de diamètre
            (fréquence de collision : 1 tous les 100 millions d&apos; années). La catastrophe a dû
            se dérouler selon les événements suivants (d&apos; après un scénario proposé pour la
            collision d&apos; un astéroïde de 10 kilomètres de diamètre) :
          </p>
        </div>
        <ul>
          <li className="marge-large">
            L&apos; énergie libérée lors de l&apos; impact (5 milliards de fois celle de la bombe
            d&apos; Hiroshima) fait monter la température de 10.000 ou 20.000°C, entraînant des
            phénomènes de fusion des roches, de vaporisation et d&apos; incendie des forêts sur
            d&apos; immenses surfaces. La chaleur dégagée dans l&apos; atmosphère provoque des
            combinaisons entre l&apos; oxygène et l&apos; azote de l&apos; air. Le NO2 résultant
            retombe sous forme de pluies d&apos; acide nitrique néfastes aux plantes et aux
            invertébrés marins.
          </li>
          <li className="marge-large">
            Le choc provoque un tremblement de terre de magnitude 12, avec des déplacements
            sédimentaires importants (turbidites) ainsi qu&apos; une reprise d&apos; activités
            volcaniques et hydrothermales. Par comparaison, le séisme le plus violent jamais
            enregistré par l&apos; Homme n&apos; avait qu&apos; une magnitude de 9 environ. Un
            séisme de magnitude 12 est des millions de fois plus puissant et ne peut pas être
            provoqué par la seule activité tectonique de la Terre.
          </li>
          <li className="marge-large">
            Il y a ensuite une vaporisation des roches provenant de l&apos; astéroïde, formant une
            gigantesque « boule de feu ». Une partie de la poussière ainsi formée s&apos; étale en
            un tapis autour du lieu d&apos; impact. À environ 20 kilomètres d&apos; altitude,
            c&apos; est-à-dire dans la stratosphère, le nuage s&apos; étale et entoure la Terre
            plusieurs mois. Ce nuage arrête de façon significative les rayons solaires, plongeant le
            globe dans l&apos; obscurité et installant un hiver d&apos; impact.
          </li>
          <li className="marge-large">
            La température diminue, plus rapidement à la surface des continents, avec une différence
            de 40°C selon certaines estimations. Au cours de ces bouleversements, les organismes des
            hautes latitudes et ceux des grands fonds sont logiquement moins affectés que ceux dont
            les besoins nécessitent de la lumière et de la chaleur.
          </li>
        </ul>
        <p>
          Mais l&apos; impact de la crise K-T a eu lieu en bordure d&apos; un continent. L&apos;
          astéroïde est arrivé apparemment dans une mer peu profonde, provoquant donc en plus la
          formation d&apos; un énorme tsunami se propageant avec une vague aussi élevée que la
          profondeur du milieu marin rencontré (une centaine de mètres), et à une vitesse de 0,5
          km/s (près de 2 000 km/h). Ce raz-de-marée colossal a balayé les côtes du sud de l&apos;
          Amérique du Nord et de l&apos; Amérique centrale. Dans un rayon de plusieurs milliers de
          kilomètres, la dévastation immédiate dut être totale. Impossible donc d&apos; y retrouver
          des fossiles d&apos; animaux contemporains de la crise.
        </p>
        <a
          className="link underline"
          href="https://www.futura-sciences.com/planete/dossiers/dinosaure-enquete-disparition-dinosaures-269/page/12/"
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

export default ScenariosContent;

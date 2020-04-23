import React from 'react';
import axios from 'axios';
import MainApp from './MainApp';
import ButtonBottom from '../Buttons/ButtonBottom';
import UpButtons from '../Buttons/ButtonTop';
import FooterContent from '../ComponentBottom/FooterContent';
import ArticleContent from '../ComponentBottom/ArticleContent';
import ScenariosContent from '../ComponentBottom/ScenariosContent';
import CriteresContent from '../ComponentBottom/CriteresContent';
import Calend from '../Calendrier/Calend';
import MainTitle from './MainTitle';
import './GlobalContainer.css';

class GlobalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBottomContent: {
        displayFooter: false,
        displayArticle: false,
        displayScenarios: false,
        displayCriteres: false
      },
      date: null,
      data: null,
      periodeChecked: false
    };
    this.loadNeoByDate = this.loadNeoByDate.bind(this);
    this.handleDisplayContent = this.handleDisplayContent.bind(this);
    this.reset = this.reset.bind(this);
    this.periodeChecked = this.periodeChecked.bind(this);
  }

  handleDisplayContent(panelToDisplay) {
    const { [panelToDisplay]: isPanelDisplayed } = this.state.displayBottomContent;
    this.setState(prevState => ({
      ...prevState,
      displayBottomContent: {
        ...prevState.displayBottomContent,
        [panelToDisplay]: !isPanelDisplayed
      }
    }));
    // Le code ci-dessus permet d'aller chercher la valeur de state situer dans L OBJET DE UNE PROPRIÉTÉ DU STATE DE LA CLASSE ici displayFooter ou display article par exemple
    const keys = Object.keys(this.state.displayBottomContent);
    keys
      .filter(item => item !== panelToDisplay)
      .map(item =>
        this.setState(prevState => ({
          ...prevState,
          displayBottomContent: { ...prevState.displayBottomContent, [item]: false }
        }))
      );
    // Le code ci-dessus permet de mettre toute les valeur de state de l'objet displayBottomContent à false quand un est sélectionné.
  }

  periodeChecked() {
    const { periodeChecked: isChecked } = this.state;
    this.setState({ periodeChecked: !isChecked });
  }

  loadNeoByDate() {
    const { date } = this.state;
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&api_key=DEMO_KEY`;
    axios
      .get(url)
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({ data: data.near_earth_objects });
      });
  }

  reset(localState) {
    const anneeF = localState.annee;
    let jourF = '';
    let moisF = '';

    if (localState.mois < 9) {
      const moisR = localState.mois + 1;
      moisF = `0${moisR}`;
    } else {
      moisF = localState.mois + 1;
    }
    if (localState.daySelect < 10) {
      jourF = `0${localState.daySelect}`;
    } else {
      jourF = localState.daySelect;
    }
    this.setState({ date: `${anneeF}-${moisF}-${jourF}` });
  }

  render() {
    const { displayFooter } = this.state.displayBottomContent;
    const { displayArticle } = this.state.displayBottomContent;
    const { displayCriteres } = this.state.displayBottomContent;
    const { displayScenarios } = this.state.displayBottomContent;
    const { periodeChecked } = this.state;
    const { date } = this.state;

    return (
      <div className="App">
        <MainTitle />
        <UpButtons periodeChecked={this.periodeChecked} />
        <div className="flex">
          <MainApp />
          {date ? (
            <h2 className="colorText">
              Astéroïdes en approche à partir du :&#141;
              {this.state.date}
            </h2>
          ) : null}
        </div>
        <div className="button-bottom">
          <ButtonBottom
            handleDisplayContent={this.handleDisplayContent}
            panelToHandle="displayArticle"
            name="Astéroïdes"
          />
          <ButtonBottom
            handleDisplayContent={this.handleDisplayContent}
            panelToHandle="displayScenarios"
            name="Scénarios"
          />
          <ButtonBottom
            handleDisplayContent={this.handleDisplayContent}
            panelToHandle="displayCriteres"
            name="Critères de danger"
          />
          <ButtonBottom
            handleDisplayContent={this.handleDisplayContent}
            panelToHandle="displayFooter"
            name="Liens Utiles"
          />
        </div>
        {displayFooter ? <FooterContent /> : null}
        {displayArticle ? <ArticleContent /> : null}
        {displayScenarios ? <ScenariosContent /> : null}
        {displayCriteres ? <CriteresContent /> : null}
        <div />
        {periodeChecked ? <Calend reset={this.reset} periodeChecked={this.periodeChecked} /> : null}
      </div>
    );
  }
}
export default GlobalContainer;

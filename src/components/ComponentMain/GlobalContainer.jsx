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
import NeoDisplay from './NeoDisplay';

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

  componentDidMount() {
    this.loadNeoByDate();
  }

  componentDidUpdate(prevProps, prevState) {
    const { date } = this.state;
    if (prevState.date !== date) {
      this.loadNeoByDate();
      setInterval(this.formatNeosData, 1000);
    }
  }

  handleDisplayContent(panelToDisplay) {
    const { displayBottomContent } = this.state;
    const { [panelToDisplay]: isPanelDisplayed } = displayBottomContent;
    this.setState(prevState => ({
      ...prevState,
      displayBottomContent: {
        ...prevState.displayBottomContent,
        [panelToDisplay]: !isPanelDisplayed
      }
    }));
    // Le code ci-dessus permet d'aller chercher la valeur de state situer dans L OBJET DE UNE PROPRIÉTÉ DU STATE DE LA CLASSE ici displayFooter ou display article par exemple
    const keys = Object.keys({ [panelToDisplay]: isPanelDisplayed });
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

  reset(localState) {
    const anneeF = localState.annee;
    const moisF = localState.mois;
    let jourF = '';
    if (localState.daySelect < 10) {
      jourF = `0${localState.daySelect}`;
    } else {
      jourF = localState.daySelect;
    }
    this.setState({ date: `${anneeF}-${moisF}-${jourF}` });
  }

  loadNeoByDate() {
    const { date } = this.state;
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&api_key=8UnDAhZSrXjM60o9icI4tiFzXvjGsAhHBBhA7m6d`;
    axios
      .get(url)
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({ data: data.near_earth_objects });
      });
  }

  render() {
    const { displayBottomContent } = this.state;
    const {
      displayFooter,
      displayArticle,
      displayCriteres,
      displayScenarios
    } = displayBottomContent;
    const { periodeChecked } = this.state;
    const { date } = this.state;
    const { data } = this.state;

    return (
      <div className="App">
        <MainTitle />
        <UpButtons periodeChecked={this.periodeChecked} />
        <MainApp date={date} data={data} />
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
        {periodeChecked ? <Calend reset={this.reset} periodeChecked={this.periodeChecked} /> : null}
      </div>
    );
  }
}
export default GlobalContainer;

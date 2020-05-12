import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MainApp from './MainApp';
import ButtonBottom from '../Buttons/ButtonBottom';
import UpButtons from '../Buttons/ButtonTop';
import FooterContent from '../ComponentBottom/FooterContent';
import ArticleContent from '../ComponentBottom/ArticleContent';
import ScenariosContent from '../ComponentBottom/ScenariosContent';
import CriteresContent from '../ComponentBottom/CriteresContent';
import MainTitle from './MainTitle';
import NeoDisplay from './NeoDisplay';
import Calend from '../Calendrier/Calend';
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
      isPeriodeChecked: false,
      displayAlert: false
    };
    this.loadNeoByDate = this.loadNeoByDate.bind(this);
    this.handleDisplayContent = this.handleDisplayContent.bind(this);
    this.reset = this.reset.bind(this);
    this.periodeChecked = this.periodeChecked.bind(this);
    this.showAlert = this.showAlert.bind(this);
  }

  componentDidMount() {
    this.loadNeoByDate();
  }

  componentDidUpdate(prevProps, prevState) {
    const { date } = this.state;
    if (prevState.date !== date) {
      this.loadNeoByDate();
    }
  }

  showAlert() {
    const { displayAlert } = this.state;
    this.setState({ displayAlert: !displayAlert });
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
    const keys = Object.keys(displayBottomContent);
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
    const { isPeriodeChecked: isChecked } = this.state;
    this.setState({ isPeriodeChecked: !isChecked });
  }

  reset(localState) {
    const { annee: anneeF, mois: moisF } = localState;
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
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&api_key=BapitUNP1XW9Ln8ki9YvBXgJlUeLj1UDofZ5ewc8`;
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
    const { displayAlert } = this.state;
    const { isPeriodeChecked, displayBottomContent, date, data } = this.state;
    const {
      displayFooter,
      displayArticle,
      displayCriteres,
      displayScenarios
    } = displayBottomContent;
    return (
      <div className="App">
        <MainTitle />
        <UpButtons periodeChecked={this.periodeChecked} />
        <div className="flex">
          <MainApp />
          {displayAlert ? <h3 className="colorText absolute">Alert</h3> : null}
          <div className="flex direction end">
            {date ? (
              <h2 className="colorText">
                Astéroïdes en approche à partir du :&#141;
                {date}
              </h2>
            ) : null}
            {data ? <NeoDisplay data={data} showAlert={this.showAlert} /> : null}
          </div>
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
        {isPeriodeChecked ? (
          <Calend reset={this.reset} periodeChecked={this.periodeChecked} />
        ) : null}
      </div>
    );
  }
}

GlobalContainer.propTypes = {
  date: PropTypes.string.isRequired,
  data: PropTypes.shape.isRequired
};

export default GlobalContainer;

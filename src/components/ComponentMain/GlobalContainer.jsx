import React from 'react';
import axios from 'axios';
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
import MonthsCalendar from '../Calendrier/MonthsCalendar';

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
      displayAlert: false,
      buttonChecked: {
        isPeriodeChecked: false,
        isBiggerChecked: false,
        isCloserChecked: false,
        isDangerousChecked: false
      }
    };
    this.loadNeoByDate = this.loadNeoByDate.bind(this);
    this.handleDisplayContent = this.handleDisplayContent.bind(this);
    this.handleCheckedButton = this.handleCheckedButton.bind(this);
    this.setData = this.setData.bind(this);
    this.reset = this.reset.bind(this);
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

  setData(localState, year, month) {
    const { buttonChecked } = this.state;
    const keys = Object.keys(buttonChecked);
    const monthChoice = `${year}-${month}`;
    const buttonActive = keys.filter(key => buttonChecked[key] === true);

    switch (buttonActive[0]) {
      case 'isBiggerChecked':
        localState.neoArray.sort(
          (a, b) =>
            a.estimated_diameter.meters.estimated_diameter_max -
            b.estimated_diameter.meters.estimated_diameter_max
        );
        // localState.neoArray.splice(10, localState.neoArray.length);

        break;
      case 'isCloserChecked':
        localState.neoArray.sort(
          (a, b) =>
            a.close_approach_data[0].miss_distance.lunar -
            b.close_approach_data[0].miss_distance.lunar
        );
        // localState.neoArray.splice(10, localState.neoArray.length);
        break;
      default:
        break;
    }
    this.setState({ data: localState });
    this.setState({ date: monthChoice });
    this.setState(prevState => ({
      ...prevState,
      buttonChecked: { ...prevState.buttonChecked, [buttonActive]: false }
    }));
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

  handleCheckedButton(buttonActive) {
    const { buttonChecked } = this.state;
    const { [buttonActive]: isActive } = buttonChecked;
    this.setState(prevState => ({
      ...prevState,
      buttonChecked: { ...prevState.buttonChecked, [buttonActive]: !isActive }
    }));
    const keys = Object.keys(buttonChecked);
    keys
      .filter(item => item !== buttonActive)
      .map(item =>
        this.setState(prevState => ({
          ...prevState,
          buttonChecked: { ...prevState.buttonChecked, [item]: false }
        }))
      );
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
    this.loadNeoByDate();
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
    const { buttonChecked, displayBottomContent, date, data } = this.state;
    const {
      isPeriodeChecked,
      isBiggerChecked,
      isCloserChecked,
      isDangerousChecked
    } = buttonChecked;
    const {
      displayFooter,
      displayArticle,
      displayCriteres,
      displayScenarios
    } = displayBottomContent;

    return (
      <div className="App">
        <MainTitle />
        <UpButtons buttonChecked={buttonChecked} handleCheckedButton={this.handleCheckedButton} />
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
          <Calend
            reset={this.reset}
            handleCheckedButton={this.handleCheckedButton}
            ButtonActive="isPeriodeChecked"
          />
        ) : null}
        {isCloserChecked || isBiggerChecked || isDangerousChecked ? (
          <MonthsCalendar dataMethod={this.setData} />
        ) : null}
      </div>
    );
  }
}

export default GlobalContainer;

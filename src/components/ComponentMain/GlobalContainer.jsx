import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainApp from './MainApp';
import ButtonBottom from '../Buttons/ButtonBottom';
import UpButtons from '../Buttons/ButtonTop';
import MainTitle from './MainTitle';
import NeoDisplay from './NeoDisplay';
import Calend from '../Calendrier/Calend';
import './GlobalContainer.css';
import MonthsCalendar from '../Calendrier/MonthsCalendar';
import ArticleContent from '../ComponentBottom/ArticleContent';
import ScenariosContent from '../ComponentBottom/ScenariosContent';
import Presentation from '../ComponentBottom/Presentation';
import LegalMentions from '../ComponentBottom/LegalMentions';
import './animation.css';

class GlobalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { buttonChecked, date, data, displayAlert } = this.state;
    const {
      isPeriodeChecked,
      isBiggerChecked,
      isCloserChecked,
      isDangerousChecked
    } = buttonChecked;
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/article-asteroide" component={ArticleContent} />
            <Route path="/article-dinosaures" component={ScenariosContent} />
            <Route path="/mentions-legales" component={LegalMentions} />
            <Route path="/presentation" component={Presentation} />
            <Route path="/">
              <MainTitle />
              <UpButtons
                buttonChecked={buttonChecked}
                handleCheckedButton={this.handleCheckedButton}
              />
              <div className="flex">
                <MainApp />
                {date && data ? (
                  <div className="flex direction width scale-in-hor-center border-right">
                    <div className="flex space-between">
                      <p className="color">Axe de passage</p>
                      <h2 className="colorText">
                        Astéroïdes en approche à partir du :&#141;
                        {date}
                      </h2>
                    </div>
                    <NeoDisplay
                      data={data}
                      displayAlert={displayAlert}
                      showAlert={this.showAlert}
                    />
                    <p className="color">Distance minimale relevée</p>
                  </div>
                ) : null}
              </div>
              <div className="button-bottom">
                <ButtonBottom name="Menu" />
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
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default GlobalContainer;

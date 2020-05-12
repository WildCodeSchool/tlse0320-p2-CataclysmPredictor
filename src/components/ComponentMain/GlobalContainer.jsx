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
import ArticleContent from '../ComponentBottom/ArticleContent';
import ScenariosContent from '../ComponentBottom/ScenariosContent';
import Presentation from '../ComponentBottom/Presentation';
import LegalMentions from '../ComponentBottom/LegalMentions';

class GlobalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      data: null,
      isPeriodeChecked: false
    };

    this.loadNeoByDate = this.loadNeoByDate.bind(this);
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
    }
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
    const { isPeriodeChecked, date, data } = this.state;
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <MainTitle />
              <UpButtons periodeChecked={this.periodeChecked} />
              <div className="flex">
                <MainApp />
                <div className="flex direction">
                  {date ? (
                    <h2 className="colorText">
                      Astéroïdes en approche à partir du :&#141;
                      {date}
                    </h2>
                  ) : null}
                  {data ? <NeoDisplay data={data} /> : null}
                </div>
              </div>
              <div className="button-bottom">
                <ButtonBottom name="Menu" />
                {isPeriodeChecked ? (
                  <Calend reset={this.reset} periodeChecked={this.periodeChecked} />
                ) : null}
              </div>
            </Route>
            <Route path="/article-asteroide" component={ArticleContent} />
            <Route path="/article-scenarios" component={ScenariosContent} />
            <Route path="/mentions-legales" component={LegalMentions} />
            <Route path="/presentation" component={Presentation} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default GlobalContainer;

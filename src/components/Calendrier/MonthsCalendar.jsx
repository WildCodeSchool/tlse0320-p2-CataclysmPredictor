import React from 'react';
import './calend.css';
import axios from 'axios';
import ArrMonths from '../Const';

class MonthsCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      annee: 2020,
      mois: null,
      object: { neoArray: [] }
    };
    this.addYear = this.addYear.bind(this);
    this.monthClick = this.monthClick.bind(this);
  }

  addYear(number) {
    const { annee } = this.state;
    this.setState({ annee: annee + number });
    this.setState({ mois: 0 });
  }

  monthClick() {
    const { annee, mois, object } = this.state;

    const yearAndMonth = `${annee}-${mois}`;
    const weekFive = `${yearAndMonth}-28`;
    const weekFour = `${yearAndMonth}-21`;
    const weekTree = `${yearAndMonth}-14`;
    const weekTwo = `${yearAndMonth}-07`;
    const weekOne = `${yearAndMonth}-01`;
    const weeklyArray = [weekOne, weekTwo, weekTree, weekFour, weekFive];
    for (let weekSelector = 0; weekSelector < weeklyArray.length; weekSelector += 1) {
      const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${weeklyArray[weekSelector]}&api_key=VBuMuKA3LLAglIreoC8fhw2IJIjlaH3Tck8G2Sz8`;
      axios
        .get(url)
        .then(res => {
          return res.data;
        })
        .then(data => {
          const newtab = Object.entries(data.near_earth_objects);

          for (let i = 0; i < newtab.length; i += 1) {
            for (let j = 0; j < newtab[i].length; j += 1) {
              for (let k = 0; k < newtab[i][j].length; k += 1) {
                if (typeof newtab[i][j][k] === 'object') {
                  object.neoArray.push(newtab[i][j][k]);
                }
              }
            }
          }
        });
    }
  }

  render() {
    const { annee, mois, object } = this.state;
    const { data } = this.props;

    return (
      <div className="containCalend">
        <div className="year">
          <button type="button" className="btnSelect" onClick={() => this.addYear(-10)}>
            &#60;&#60;
          </button>
          <button type="button" className="btnSelect" onClick={() => this.addYear(-1)}>
            &#60;
          </button>
          <p className="noMarge">{annee}</p>
          <button type="button" className="btnSelect" onClick={() => this.addYear(1)}>
            &#62;
          </button>
          <button type="button" className="btnSelect" onClick={() => this.addYear(10)}>
            &#62;&#62;
          </button>
        </div>
        <div className="moisSelect">
          <div className="mois">
            {ArrMonths.map(item => (
              <button
                type="button"
                className="calendarWidth formatItem"
                onMouseEnter={() => this.setState({ mois: item.id })}
                onClick={() => {
                  this.monthClick();
                  data(object);
                }}
              >
                {item.month}
              </button>
            ))}
          </div>
        </div>
        <div className="footCalendar">
          <p>{`Votre mois choisi : ${annee}-${mois}`}</p>
        </div>
      </div>
    );
  }
}

export default MonthsCalendar;

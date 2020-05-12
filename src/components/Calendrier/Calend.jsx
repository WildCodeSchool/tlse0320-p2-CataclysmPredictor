import React from 'react';
import './calend.css';
import PropTypes from 'prop-types';
import ArrMonths from '../Const';

class Calend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      annee: 2020,
      mois: 0,
      showAppli: false,
      daySelect: 1,
      moiEnCour: [],
      shMounth: true,
      showDay: true,
      dateFinal: 'Error try again...'
    };
    this.addYear = this.addYear.bind(this);
    this.monthClick = this.monthClick.bind(this);
    this.clickEnter = this.clickEnter.bind(this);
    this.showMonth = this.showMonth.bind(this);
    this.notShowMonth = this.notShowMonth.bind(this);
  }

  addYear(nombre) {
    const { annee } = this.state;
    this.setState({ annee: annee + nombre });
    this.setState({ mois: 0 });
  }

  monthClick() {
    const { mois, annee, moiEnCour } = this.state;
    if (mois === '02') {
      if (annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0)) {
        for (let i = 1; i <= 29; i += 1) {
          moiEnCour.push(i);
        }
      } else {
        for (let i = 1; i <= 28; i += 1) {
          moiEnCour.push(i);
        }
      }
    } else if (mois === '04' || mois === '06' || mois === '09' || mois === '11') {
      for (let i = 1; i <= 30; i += 1) {
        moiEnCour.push(i);
      }
    } else {
      for (let i = 1; i <= 31; i += 1) {
        moiEnCour.push(i);
      }
    }
    this.setState({ shMounth: false });
    this.setState({ showDay: true });
  }

  clickEnter() {
    const { showAppli } = this.state;
    this.setState({ showAppli: !showAppli });
  }

  showMonth() {
    this.setState({ shMounth: true });
  }

  notShowMonth() {
    this.setState({ shMounth: false });
  }

  render() {
    const { annee, mois, shMounth, showDay, moiEnCour, daySelect } = this.state;
    const { reset, periodeChecked } = this.props;
    return (
      <div className="containCalend border">
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
          {shMounth ? (
            <div className="mois">
              {ArrMonths.map(item => (
                <button
                  type="button"
                  className="calendarWidth formatItem"
                  onMouseEnter={() => this.setState({ mois: item.id })}
                  onClick={this.monthClick}
                >
                  {item.month}
                </button>
              ))}
            </div>
          ) : null}

          {showDay ? (
            <div className="mois">
              {moiEnCour.map((jour, j) => (
                <button
                  type="button"
                  className="calendarWidth formatItem"
                  onMouseEnter={() => this.setState({ daySelect: [j + 1] })}
                  onClick={() => {
                    this.setState({ showDay: false });
                    reset(this.state);
                    periodeChecked();
                  }}
                >
                  {jour}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div className="footCalendar">
          <p>
            {`Votre date choisie : ${annee}-${mois}-${daySelect <= 9 ? 0 + daySelect : daySelect}`}
          </p>
        </div>
      </div>
    );
  }
}

Calend.propTypes = {
  reset: PropTypes.func.isRequired,
  periodeChecked: PropTypes.func.isRequired
};

export default Calend;

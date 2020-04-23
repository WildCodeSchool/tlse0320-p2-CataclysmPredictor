import React from 'react';
import './calend.css';

const arrMois = [
  'Janvier',
  'Fevrier',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Aout',
  'Septembre',
  'Octobre',
  'Novembre',
  'Decembre'
];

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
    this.setState(() => (this.state.annee += nombre));
    this.setState({ mois: 0 });
  }

  monthClick() {
    const { mois } = this.state;
    this.state.moiEnCour = [];
    if (mois == 1) {
      if (
        this.state.annee % 4 === 0 &&
        (this.state.annee % 100 != 0 || this.state.annee % 400 === 0)
      ) {
        for (let i = 1; i <= 29; i++) {
          this.state.moiEnCour.push(i);
        }
      } else {
        for (let i = 1; i <= 28; i++) {
          this.state.moiEnCour.push(i);
        }
      }
    } else if (mois === 3 || mois === 5 || mois === 8 || mois === 10) {
      for (let i = 1; i <= 30; i++) {
        this.state.moiEnCour.push(i);
      }
    } else {
      for (let i = 1; i <= 31; i++) {
        this.state.moiEnCour.push(i);
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
    const { annee, mois, shMounth, showDay, moiEnCour, daySelect, dateFinal } = this.state;
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
              {arrMois.map((moi, i) => (
                <button
                  type="button"
                  className="calendarWidth formatItem"
                  onMouseEnter={() => this.setState({ mois: i })}
                  onClick={this.monthClick}
                >
                  {arrMois[i]}
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
                    this.props.reset(this.state);
                    this.props.periodeChecked();
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
            Votre date choisi :{annee}-{mois < 9 ? <a>0</a> : null}
            {mois + 1}-{daySelect < 10 ? <a>0</a> : null}
            {daySelect}
          </p>
        </div>
      </div>
    );
  }
}
export default Calend;

import React from 'react';
import './calend.css';

const arrMois2 = [
  {
    id: '01',
    month: 'Janvier'
  },
  {
    id: '02',
    month: 'Février'
  },
  {
    id: '03',
    month: 'Mars'
  },
  {
    id: '04',
    month: 'Avril'
  },
  {
    id: '05',
    month: 'Mai'
  },
  {
    id: '06',
    month: 'Juin'
  },
  {
    id: '07',
    month: 'Juillet'
  },
  {
    id: '08',
    month: 'Août'
  },
  {
    id: '09',
    month: 'Septembre'
  },
  {
    id: '10',
    month: 'Octobre'
  },
  {
    id: '11',
    month: 'Novembre'
  },
  {
    id: '12',
    month: 'Décembre'
  }
];

class FiltersCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      annee: 2020,
      mois: 0,
      showAppli: false,
      moisEnCours: [],
      shMounth: true
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
    const { mois, annee, moisEnCours } = this.state;
    if (mois === '02') {
      if (annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0)) {
        for (let i = 1; i <= 29; i += 1) {
          moisEnCours.push(i);
        }
      } else {
        for (let i = 1; i <= 28; i += 1) {
          moisEnCours.push(i);
        }
      }
    } else if (mois === '04' || mois === '06' || mois === '09' || mois === '11') {
      for (let i = 1; i <= 30; i += 1) {
        moisEnCours.push(i);
      }
    } else {
      for (let i = 1; i <= 31; i += 1) {
        moisEnCours.push(i);
      }
    }
    this.setState({ shMounth: false });
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
    const { annee, mois, shMounth } = this.state;
    return (
      <div className="containCalend">
        <div className="year">
          <button type="button" className="btnSelect" onClick={() => this.addYear(-10)}>
            --
          </button>
          <button type="button" className="btnSelect" onClick={() => this.addYear(-1)}>
            -
          </button>
          <p>{annee}</p>
          <button type="button" className="btnSelect" onClick={() => this.addYear(1)}>
            +
          </button>
          <button type="button" className="btnSelect" onClick={() => this.addYear(10)}>
            ++
          </button>
        </div>
        <div className="moisSelect">
          {shMounth ? (
            <div className="mois">
              {arrMois2.map(item => (
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
        </div>
        <div className="footCalendar">
          <p>{`Votre date choisie : ${annee}-${mois}`}</p>
        </div>
      </div>
    );
  }
}

export default FiltersCalendar;

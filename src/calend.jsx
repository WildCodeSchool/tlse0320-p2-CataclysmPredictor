import React from 'react';
import './calend.css';

const arrMois = [
  'moi à choisir',
  'janvier',
  'fevrier',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'aout',
  'septembre',
  'octobre',
  'novembre',
  'decembre',
  'moi à choisir'
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
      shMounth: false,
      showDay: true
    };
    this.addYear = this.addYear.bind(this);
    this.addMounth = this.addMounth.bind(this);
    this.monthClick = this.monthClick.bind(this);
    this.clickEnter = this.clickEnter.bind(this);
    this.reset = this.reset.bind(this);
    this.showMonth = this.showMonth.bind(this);
    this.notShowMonth = this.notShowMonth.bind(this);
  }

  addYear(nombre) {
    const { annee } = this.state;
    const nombreUp = annee + nombre;
    this.setState({ annee: nombreUp });
  }

  addMounth(nombre) {
    const { mois } = this.state;
    const nombreUp = mois + nombre;
    this.setState({ mois: nombreUp });
    if (mois > 12) {
      this.setState({ mois: 1 });
      this.addYear(1);
    }
    if (mois < 1) {
      this.setState({ mois: 12 });
      this.addYear(-1);
    }
  }

  monthClick() {
    const { annee, mois } = this.state;
    this.state.moiEnCour = [];
    if (mois === 1) {
      if (annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0)) {
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

  reset() {
    this.setState({ annee: 2020 });
  }

  render() {
    const { annee, mois, shMounth, showDay, moiEnCour, daySelect } = this.state;
    return (
      <div className="containCalend">
        <div className="fondBlanc">
          <button type="button" className="red" onClick={() => this.addYear(-10)}>
            --
          </button>
          <button type="button" className="red" onClick={() => this.addYear(-1)}>
            -
          </button>
          <p>{annee}</p>
          <button type="button" className="green" onClick={() => this.addYear(1)}>
            +
          </button>
          <button type="button" className="green" onClick={() => this.addYear(10)}>
            ++
          </button>
        </div>
        <div className="fondBlanc">
          <button type="button" className="red" onClick={() => this.addMounth(-1)}>
            -
          </button>
          <button type="button" className="red">
            {arrMois[mois]}
          </button>
          <button type="button" className="red" onClick={() => this.addMounth(1)}>
            +
          </button>
          <div>
            {moiEnCour.map((jour, j) => (
              <button
                type="button"
                className="green"
                onMouseEnter={() => this.setState({ daySelect: [j + 1] })}
                onClick={() => this.setState({ showDay: false })}
              >
                {jour}
              </button>
            ))}
          </div>
        </div>
        <p className="text">
          Votre date choisi : {annee}-{mois < 9 ? <a>0</a> : null}
          {this.state.mois}-{daySelect < 9 ? <a>0</a> : null}
          {daySelect}
        </p>
        <button type="button" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}
export default Calend;

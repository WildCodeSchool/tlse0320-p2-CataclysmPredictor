import React from 'react';
import './calend.css';

const arrMois = [
  'Mois à choisir',
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
  'decembre'
];

class Calend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      annee: 2020,
      mois: 0,
      JourParMois: 30,
      showAppli: false,
      daySelect: 'Pas encore choisis',
      moiEnCour: []
    };
    this.addYear = this.addYear.bind(this);
    this.monthClick = this.monthClick.bind(this);
    this.clickEnter = this.clickEnter.bind(this);
    this.ok = this.ok.bind(this);
    this.reset = this.reset.bind(this);
  }

  addYear() {
    this.setState(() => (this.state.annee += 1));
    const { mois } = this.state;
    this.setState({ mois: 0 });
  }

  monthClick() {
    if (this.state.mois > 11) {
      this.setState(() => (this.state.mois = 1));
    } else {
      this.setState(() => (this.state.mois += 1));
    }

    this.state.moiEnCour = [];
    const egal = this.state.mois;

    if (this.state.mois === 1) {
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
    } else if (egal === 1 || egal === 3 || egal === 5 || egal === 8 || egal === 10 || egal === 12) {
      for (let i = 1; i <= 30; i++) {
        this.state.moiEnCour.push(i);
      }
    } else {
      for (let i = 1; i <= 31; i++) {
        this.state.moiEnCour.push(i);
      }
    }
  }

  clickEnter() {
    const { showAppli } = this.state;
    this.setState({ showAppli: !showAppli });
  }

  ok() {
    this.setState(() => (this.okay = true));
  }

  reset() {
    const { annee } = this.state;
    this.setState({ annee: 2020 });
  }

  render() {
    const { annee, mois } = this.state;
    return (
      <div>
        <p className="text">
          {' '}
          Choix année : <button onClick={this.addYear}>{annee}</button>
          Le mois : <button onClick={this.monthClick}>{arrMois[mois]}</button>{' '}
          <button onClick={this.clickEnter}>Ok</button>
        </p>
        {this.state.showAppli ? (
          <div>
            <p className="text">
              Quel jour ?{' '}
              {this.state.moiEnCour.map((jour, i) => (
                <button onClick={() => (this.state.daySelect = jour)}>{jour}</button>
              ))}
            </p>
            <div>
              {' '}
              <p className="text">
                <button onClick={this.clickEnter}>Ok</button>
              </p>
            </div>
          </div>
        ) : null}

        <p className="text">
          {' '}
          Votre date choisi : {this.state.daySelect} {arrMois[this.state.mois]} {this.state.annee}
        </p>
        <button onClick={this.reset}> Reset </button>
      </div>
    );
  }
}
export default Calend;

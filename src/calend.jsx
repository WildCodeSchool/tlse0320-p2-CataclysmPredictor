import React from 'react';
import './calend.css';

const arrMois = [
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
      moiEnCour: [],
      shMounth: false
    };
    this.addYear = this.addYear.bind(this);
    this.monthClick = this.monthClick.bind(this);
    this.clickEnter = this.clickEnter.bind(this);
    this.reset = this.reset.bind(this);
    this.showMonth = this.showMonth.bind(this);
    this.notShowMonth = this.notShowMonth.bind(this);
  }

  addYear(nombre) {
    this.setState(() => (this.state.annee += nombre));
    const { mois } = this.state;
    this.setState({ mois: 0 });
  }

  monthClick() {
    const egal = this.state.mois + 1;

    if (this.state.mois === 1) {
      if (
        this.state.annee % 4 === 0 &&
        (this.state.annee % 100 != 0 || this.state.annee % 400 === 0)
      ) {
        for (let i = 1; i <= 29; i++) {
          this.setState({ moiEnCour: [this.state.moiEnCour.push(i)] });
        }
      } else {
        for (let i = 1; i <= 28; i++) {
          this.setState({ moiEnCour: [this.state.moiEnCour.push(i)] });
        }
      }
    } else if (egal === 1 || egal === 3 || egal === 5 || egal === 8 || egal === 10 || egal === 12) {
      for (let i = 1; i <= 30; i++) {
        this.setState({ moiEnCour: [this.state.moiEnCour.push(i)] });
      }
    } else {
      for (let i = 1; i <= 31; i++) {
        this.setState({ moiEnCour: [this.state.moiEnCour.push(i)] });
      }
    }
  }

  clickEnter() {
    const { showAppli } = this.state;
    this.setState({ showAppli: !showAppli });
  }
  showMonth() {
    const { shMounth } = this.state;
    this.setState({ shMounth: true });
  }
  notShowMonth() {
    const { shMounth } = this.state;
    this.setState({ shMounth: false });
  }

  reset() {
    const { annee } = this.state;
    this.setState({ annee: 2020, mois: -1 });
  }

  render() {
    const { annee, mois, shMounth } = this.state;
    {
      this.monthClick();
    }
    return (
      <div>
        // Gestion de l'année.
        <p className="text">{annee}</p>
        <button className="red" onClick={() => this.addYear(-10)}>
          {' '}
          --{' '}
        </button>
        <button className="red" onClick={() => this.addYear(-1)}>
          {' '}
          -{' '}
        </button>
        <button className="green" onClick={() => this.addYear(1)}>
          {' '}
          +{' '}
        </button>
        <button className="green" onClick={() => this.addYear(10)}>
          {' '}
          ++{' '}
        </button>
        // Gestion des mois.
        <p className="text">{arrMois[this.state.mois]}</p>
        <div className="red" onMouseEnter={this.showMonth} onMouseLeave={this.notShowMonth}>
          <p className="text"> Select mois</p>

          {this.state.shMounth ? (
            <div>
              {arrMois.map((moi, i) => (
                <button className="green" onClick={() => this.setState({ mois: [i] })}>
                  {arrMois[i]}
                </button>
              ))}
            </div>
          ) : null}
          <p className="text">{mois} </p>
        </div>
        //le jour :
        {this.state.mois >= 0 ? (
          <div>
            <p className="text">
              Quel jour ?{' '}
              {this.state.moiEnCour.map((jour, j) => (
                <button className="green" onClick={() => this.setState({ daySelect: [j + 1] })}>
                  {jour}
                </button>
              ))}
            </p>
            <div></div>
          </div>
        ) : null}
        <p className="text">
          Votre date choisi : {this.state.daySelect} {arrMois[this.state.mois]} {this.state.annee}
        </p>
        <button onClick={this.reset}> Reset </button>
      </div>
    );
  }
}
export default Calend;

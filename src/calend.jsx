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
    const mois = this.state.mois;
    this.state.moiEnCour = [];
    console.log(this.state.mois);
    console.log(mois);
    if (mois == 1) {
      console.log('fevrier');
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
      console.log('30');
      for (let i = 1; i <= 30; i++) {
        this.state.moiEnCour.push(i);
      }
    } else {
      console.log('Else 31');
      for (let i = 1; i <= 31; i++) {
        this.state.moiEnCour.push(i);
      }
    }
    this.setState({ shMounth: false });
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
    this.setState({ annee: 2020 });
  }

  returnFormat() {}

  render() {
    const { annee, mois, shMounth } = this.state;
    return (
      <div>
        // Gestion de l'année.
        <p className="text">{annee}</p>
        <button className="red" onClick={() => this.addYear(-10)}>
          --
        </button>
        <button className="red" onClick={() => this.addYear(-1)}>
          -
        </button>
        <button className="green" onClick={() => this.addYear(1)}>
          +
        </button>
        <button className="green" onClick={() => this.addYear(10)}>
          ++
        </button>
        // Gestion des mois.
        <p className="text">{arrMois[this.state.mois]}</p>
        <div className="red" onMouseEnter={this.showMonth}>
          <p className="text"> Select mois</p>
        </div>
        {this.state.shMounth ? (
          <div>
            {arrMois.map((moi, i) => (
              <button
                className="green"
                onMouseEnter={() => this.setState({ mois: i })}
                onClick={this.monthClick}
              >
                {arrMois[i]}
              </button>
            ))}
          </div>
        ) : null}
        <p className="text">{mois} </p>
        //le jour :
        {this.state.mois >= 0 ? (
          <div>
            <p className="text">
              Quel jour ?
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
          Votre date choisi : {this.state.annee}-{this.state.mois}-{this.state.daySelect}
        </p>
        <button onClick={this.reset}> Reset </button>
      </div>
    );
  }
}
export default Calend;

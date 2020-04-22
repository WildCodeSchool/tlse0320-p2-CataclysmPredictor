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
      daySelect: 1,
      moiEnCour: [],
      shMounth: false,
      showDay: true,
      dateFinal: 'non'
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
    this.setState({ showDay: true });
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
    this.setState({ annee: 2020 });
    const anneeF = this.state.annee;
    let jourF = '';
    let moisF = '';

    if (this.state.mois < 9) {
      let moisR = this.state.mois + 1;
      moisF = `0${moisR}`;
    } else {
      moisF = this.state.mois + 1;
    }
    if (this.state.daySelect < 9) {
      jourF = `0${this.state.daySelect}`;
    } else {
      jourF = this.state.daySelect;
    }
    this.setState({ dateFinal: `${anneeF}-${moisF}-${jourF}` });
  }

  returnFormat() {}

  render() {
    const { annee, mois, shMounth } = this.state;
    return (
      <div className="containCalend">
        <div className="fondBlanc">
          <button className="red" onClick={() => this.addYear(-10)}>
            --
          </button>
          <button className="red" onClick={() => this.addYear(-1)}>
            -
          </button>
          <p>{annee}</p>
          <button className="green" onClick={() => this.addYear(1)}>
            +
          </button>
          <button className="green" onClick={() => this.addYear(10)}>
            ++
          </button>
        </div>
        <div className="fondBlanc">
          <button className="red" onMouseEnter={this.showMonth}>
            <p className="text"> Selectionner une date </p>
          </button>
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
          {this.state.showDay ? (
            <div>
              <p className="text">
                {this.state.moiEnCour.map((jour, j) => (
                  <button
                    className="green"
                    onMouseEnter={() => this.setState({ daySelect: [j + 1] })}
                    onClick={() => this.setState({ showDay: false })}
                  >
                    {jour}
                  </button>
                ))}
              </p>
              <div></div>
            </div>
          ) : null}
        </div>
        <p className="text">
          Votre date choisi : {this.state.annee}-{this.state.mois < 9 ? <a>0</a> : null}
          {this.state.mois + 1}-{this.state.daySelect < 9 ? <a>0</a> : null}
          {this.state.daySelect}
        </p>
        <p>{this.state.dateFinal}</p>
        <button onClick={this.reset}> Ok </button>
      </div>
    );
  }
}
export default Calend;

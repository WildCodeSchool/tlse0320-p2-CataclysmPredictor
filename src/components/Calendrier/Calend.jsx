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
      <div className="containCalend">
        <div className="year">
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
        <div className="moisSelect">
          <div className="mois">
            {shMounth ? (
              <div>
                {arrMois.map((moi, i) => (
                  <button
                    type="button"
                    className="btnMonthSelector"
                    onMouseEnter={() => this.setState({ mois: i })}
                    onClick={this.monthClick}
                  >
                    {arrMois[i]}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          {showDay ? (
            <div>
              <p className="text">
                {moiEnCour.map((jour, j) => (
                  <button
                    type="button"
                    className="btndaySelector"
                    onMouseEnter={() => this.setState({ daySelect: [j + 1] })}
                    onClick={() => this.setState({ showDay: false })}
                  >
                    {jour}
                  </button>
                ))}
              </p>
            </div>
          ) : null}
        </div>
        <p className="text">
          Votre date choisi :{annee}-{mois < 9 ? <a>0</a> : null}
          {mois + 1}-{daySelect < 10 ? <a>0</a> : null}
          {daySelect}
        </p>
        <p>{dateFinal}</p>
        <button
          type="button"
          className="btnvalidator"
          onClick={() => {
            this.props.reset(this.state);
          }}
        >
          Valider
        </button>
        <button
          type="button"
          className="btnvalidator"
          onClick={() => {
            this.setState({ shMounth: true });
          }}
        >
          Choisir une autre date
        </button>
      </div>
    );
  }
}
export default Calend;

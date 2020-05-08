import React from 'react';
import './calend.css';
import axios from 'axios';
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
      shMounth: true,
      semaine: null,
      semaine1: null,
      semaine2: null,
      semaine3: null,
      semaine4: null,
      dataSemaine: [],
      data: null,
      objet: { tableauNeo: [] }
      /* semaine1 "2020-08" => "2020-08-28"
       semaine2 "2020-08" => "2020-08-21"
       console.log(this.setState({ semaine1: this.state.semaine1 + "-28"})); */
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
    const { shMounth, annee, mois } = this.state;
    this.setState({ shMounth: !shMounth });

    const semaineBase = `${annee}-${mois}`;
    // 2020-05
    const semaine1 = `${semaineBase}-28`;

    const semaine2 = `${semaineBase}-21`;
    const semaine3 = `${semaineBase}-14`;
    const semaine4 = `${semaineBase}-07`;
    const semaine5 = `${semaineBase}-01`;

    const tableauSemaines = [semaine1, semaine2, semaine3, semaine4, semaine5];
    const arrNeo = [];

    let datares = [];
    for (let tour = 0; tour < tableauSemaines.length; tour++) {
      const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${tableauSemaines[tour]}&api_key=8UnDAhZSrXjM60o9icI4tiFzXvjGsAhHBBhA7m6d`;
      axios
        .get(url)
        .then(res => {
          return res.data;
        })
        .then(data => {
          const newtab = Object.entries(data.near_earth_objects);

          for (let i = 0; i < newtab.length; i++) {
            for (let j = 0; j < newtab[i].length; j++) {
              for (let k = 0; k < newtab[i][j].length; k++) {
                if (typeof newtab[i][j][k] === 'object') {
                  this.state.objet.tableauNeo.push(newtab[i][j][k]);
                }
              }
            }
          }
        });
    }
    console.log(this.state.objet.tableauNeo);
    setTimeout(() => {
      this.state.objet.tableauNeo.sort(
        (a, b) =>
          a.close_approach_data[0].miss_distance.lunar -
          b.close_approach_data[0].miss_distance.lunar
      );
      console.log(this.state.objet.tableauNeo.length);
      const preResult = this.state.objet.tableauNeo.filter(
        neo => neo.is_potentially_hazardous_asteroid === true
      );

      const result = preResult.slice(0, 10);
      console.log(result);
      this.setState({ tableauNeo: result });
      this.props.data(this.state.tableauNeo);
    }, 10000);
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

  setRequestDate() {
    this.setState({ semaine1: `${this.state.semaine1}-28` });
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
          <p>{`Votre mois choisi : ${annee}-${mois}`}</p>
        </div>
      </div>
    );
  }
}

export default FiltersCalendar;

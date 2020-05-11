import React from 'react';
import './calend.css';
import axios from 'axios';

/*
need in Globalcontainer:
<FiltersCalendar data={this.setData} />
  setData(localState) {
    const datare = { date: localState };
    console.log(datare);
    this.setState({ data: datare });
    console.log(this.state.data);
  }
  
*/


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
      mois: null,
      showAppli: false,
      shMounth: true,
      data: null,
      object: { neoArray: [] }
      
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

    const yearAndMonth = `${annee}-${mois}`;
    const weekFive = `${yearAndMonth}-28`;
    const weekFour = `${yearAndMonth}-21`;
    const weekTree = `${yearAndMonth}-14`;
    const weekTwo = `${yearAndMonth}-07`;
    const weekOne = `${yearAndMonth}-01`;
    const weeklyArray = [weekOne, weekTwo, weekTree, weekFour, weekFive];
    

    for (let weekSelector=0; weekSelector < weeklyArray.length; weekSelector++) {
      const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${weeklyArray[weekSelector]}&api_key=VBuMuKA3LLAglIreoC8fhw2IJIjlaH3Tck8G2Sz8`;
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
                  this.state.object.neoArray.push(newtab[i][j][k]);
                }
              }
            }
          }
        });
    }
    console.log(this.state.object.neoArray);
    setTimeout(() => {
       this.state.object.neoArray.sort(
        (a, b) =>
          a.close_approach_data[0].miss_distance.lunar -
          b.close_approach_data[0].miss_distance.lunar);
      const preResult = this.state.object.neoArray.filter(neo => neo.is_potentially_hazardous_asteroid === true);
      const result = preResult.slice(0, 10);
      this.setState({ arrayOfNeo : result });
      console.log(result)
      this.props.data(this.state.arrayOfNeo);
    }, 5000);
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
          <p>{`Votre mois choisi : ${annee}-${mois}`}</p>
        </div>
      </div>
    );
  }
}

export default FiltersCalendar;

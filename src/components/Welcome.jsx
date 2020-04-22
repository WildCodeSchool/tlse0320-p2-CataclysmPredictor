import React, { Component } from 'react';
import Contener from './Contener';
import './Welcome.css';
const date = '2020-01-01';
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAppli: true,
      items: []
    };
    this.clickEnter = this.clickEnter.bind(this);
  }

  // componentDidMount() {
  //   fetch()
  //     .then(response => response.json())
  //     .then(response => {
  //
  //       this.setState({ items: response });
  //     });
  // }

  clickEnter() {
    const { showAppli } = this.state;
    this.setState({ showAppli: !showAppli });
  }

  render() {
    //  console.log(typeof(this.state.items));
    const neo = this.state.items;
    const neoAgain = neo.near_earth_objects;
    console.log('le type est :' + typeof neoAgain);

    const { showAppli } = this.state;
    const { items } = this.state;
    const { url, explanation, copyright } = items;
    return (
      <div>
        {showAppli ? (
          <div className="contain" style={{ backgroundImage: `url(${url})` }}>
            <div className="contenu">
              <h1>Cataclysm Predictor</h1>
              <p>Ne regardez plus les étoiles, elles vont vous tomber sur la tête.</p>
              <button className="button-nav" type="button" onClick={this.clickEnter}>
                Entrer
              </button>
            </div>
            <div className="information">
              <p className="texte">{this.state.items.near_earth_objets}</p>
              <p className="texte">{`Copyright : ${copyright}`}</p>
            </div>
          </div>
        ) : (
          <Contener />
        )}
      </div>
    );
  }
}

export default Welcome;

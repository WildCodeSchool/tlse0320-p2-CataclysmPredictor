import React, { Component } from 'react';
import MainApp from './mainapp';
import './accueil.css';

class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAppli: true,
      items: []
    };
    this.clickEnter = this.clickEnter.bind(this);
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => response.json())
      .then(response => {
        this.setState({ items: response });
      });
  }

  clickEnter() {
    const { showAppli } = this.state;
    this.setState({ showAppli: !showAppli });
  }

  render() {
    const { showAppli, items } = this.state;
    const { chemainImage, copyright, explanation } = items.url;
    return (
      <div>
        {showAppli ? (
          <div className="contain" style={{ backgroundImage: `url(${chemainImage})` }}>
            <div className="contenu">
              <h1>Catalysme predictor</h1>
              <p>Ne regardez plus les étoiles, elles vont vous tomber sur la tête.</p>
              <button type="button" onClick={this.clickEnter}>
                Entrer
              </button>
            </div>
            <div className="information">
              <p className="texte">{explanation}</p>
              <p className="texte">{`Copyright : ${copyright}`}</p>
            </div>
          </div>
        ) : (
          <MainApp />
        )}
      </div>
    );
  }
}

export default Accueil;

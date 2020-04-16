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
  clickEnter() {
    this.setState({ showAppli: !this.state.showAppli });
  }

  componentDidMount() {
    // URL a changer par https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ items: response });
      })
      .catch(error => alert('Erreur : ' + error));
  }

  render() {
    //chemain a ajuster pour l'API NASA a partir de .items
    let chemainImage = this.state.items.url;
    return (
      <div>
        {this.state.showAppli ? (
          <div className="contain" style={{ backgroundImage: `url(${chemainImage})` }}>
            <div className="contenu">
              <h1>Catalysme predictor</h1>
              <p>Ne regardez plus les étoiles, elles vont vous tomber sur la tête.</p>
              <button type="button" onClick={this.clickEnter}>
                Entrer
              </button>
            </div>
            <div className="information">
              <p className="texte">{this.state.items.explanation}</p>
              <p className="texte">Copyright : {this.state.items.copyright}</p>
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

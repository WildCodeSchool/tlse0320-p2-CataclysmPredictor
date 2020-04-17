import React, { Component } from 'react';
import Contener from './Contener';
import './Welcome.css';

class Welcome extends Component {
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
<<<<<<< HEAD:src/components/accueil.jsx
=======
    const { showAppli } = this.state;
    const { items } = this.state;
    const { url, explanation, copyright } = items;
>>>>>>> origin/initUI:src/components/Welcome.jsx
    return (
      <div>
        {showAppli ? (
          <div className="contain" style={{ backgroundImage: `url(${url})` }}>
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
          <Contener />
        )}
      </div>
    );
  }
}

export default Welcome;

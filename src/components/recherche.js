import React from 'react';
// Un classe qui permet de charger le fond d'une image avec un API
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // URL a changer par https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.json())
      .then(response => {
        console.log(response[0]);
        this.setState({ items: response[0] });
      })
      .catch(error => alert('Erreur : ' + error));
  }

  render() {
    //chemain a ajuster pour l'API NASA
    let chemainImage = this.state.items.image;
    return (
      <div style={{ backgroundImage: `url(${chemainImage})` }}>
        <p> image en fond </p>
      </div>
    );
  }
}

export default MyComponent;

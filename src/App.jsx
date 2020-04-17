import React from 'react';
import MainApp from './components/MainApp';
import ButtonBottom from './components/ButtonBottom';
import FooterContent from './components/FooterContent';
import ArticleContent from './components/ArticleContent';
import ScenariosContent from './components/ScenariosContent';
import CriteresContent from './components/CriteresContent';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFooter: false,
      displayArticle: false,
      displayScenarios: false,
      displayCriteres: false
    };
    this.handleDisplayContent = this.handleDisplayContent.bind(this);
  }

  handleDisplayContent(panelToDisplay) {
    const { [panelToDisplay]: isPanelDisplayed } = this.state;
    this.setState({ [panelToDisplay]: !isPanelDisplayed });
    for (const i in this.state) {
      if (i !== panelToDisplay) {
        this.setState({ [i]: false });
      }
    }
  }

  render() {
    const { displayFooter } = this.state;
    const { displayArticle } = this.state;
    const { displayCriteres } = this.state;
    const { displayScenarios } = this.state;

    return (
      <div className="App">
        <MainApp />
        <div className="button-bottom">
          <ButtonBottom
            handleDisplayContent={this.handleDisplayContent}
            panelToHandle="displayFooter"
            name="Liens Utiles"
          />
          <ButtonBottom
            handleDisplayContent={this.handleDisplayContent}
            panelToHandle="displayArticle"
            name="Astéroïdes"
          />
          <ButtonBottom
            handleDisplayContent={this.handleDisplayContent}
            panelToHandle="displayScenarios"
            name="Scénarios catastrophe"
          />
          <ButtonBottom
            handleDisplayContent={this.handleDisplayContent}
            panelToHandle="displayCriteres"
            name="Critères de dangerosité"
          />
        </div>
        {displayFooter ? <FooterContent /> : null}
        {displayArticle ? <ArticleContent /> : null}
        {displayScenarios ? <ScenariosContent /> : null}
        {displayCriteres ? <CriteresContent /> : null}
        <div />
      </div>
    );
  }
}

export default App;

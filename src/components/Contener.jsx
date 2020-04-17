import React from 'react';
import MainApp from './MainApp';
import ButtonBottom from './ButtonBottom';
import FooterContent from './FooterContent';
import ArticleContent from './ArticleContent';
import ScenariosContent from './ScenariosContent';
import CriteresContent from './CriteresContent';
import '../style.css';

class Contener extends React.Component {
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
export default Contener;

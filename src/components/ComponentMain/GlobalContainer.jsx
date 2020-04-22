import React from 'react';
import MainApp from './MainApp';
import ButtonBottom from '../Buttons/Button';
import UpButtons from '../Buttons/ButtonTop';
import FooterContent from '../ComponentBottom/FooterContent';
import ArticleContent from '../ComponentBottom/ArticleContent';
import ScenariosContent from '../ComponentBottom/ScenariosContent';
import CriteresContent from '../ComponentBottom/CriteresContent';
import MainTitle from './MainTitle';
import Request from '../Request/Request';
import './GlobalContainer.css';

class GlobalContainer extends React.Component {
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
    const keys = Object.keys(this.state);
    keys.filter(item => item !== panelToDisplay).map(item => this.setState({ [item]: false }));
  }

  render() {
    const { displayFooter } = this.state;
    const { displayArticle } = this.state;
    const { displayCriteres } = this.state;
    const { displayScenarios } = this.state;

    return (
      <div className="App">
        <MainTitle />
        <UpButtons />
        <MainApp />
        <div className="button-bottom">
          <ButtonBottom
            handleDisplayContent={this.handleDisplayContent}
            panelToHandle="displayArticle"
            name="Astéroïdes"
          />
          <ButtonBottom
            handleDisplayContent={this.handleDisplayContent}
            panelToHandle="displayScenarios"
            name="Scénarios"
          />
          <ButtonBottom
            handleDisplayContent={this.handleDisplayContent}
            panelToHandle="displayCriteres"
            name="Critères de danger"
          />
          <ButtonBottom
            handleDisplayContent={this.handleDisplayContent}
            panelToHandle="displayFooter"
            name="Liens Utiles"
          />
        </div>
        {displayFooter ? <FooterContent /> : null}
        {displayArticle ? <ArticleContent /> : null}
        {displayScenarios ? <ScenariosContent /> : null}
        {displayCriteres ? <CriteresContent /> : null}
        <div />
        <Request />
      </div>
    );
  }
}
export default GlobalContainer;

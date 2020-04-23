import React from 'react';
import MainApp from './MainApp';
import ButtonBottom from '../Buttons/ButtonBottom';
import UpButtons from '../Buttons/ButtonTop';
import FooterContent from '../ComponentBottom/FooterContent';
import ArticleContent from '../ComponentBottom/ArticleContent';
import ScenariosContent from '../ComponentBottom/ScenariosContent';
import CriteresContent from '../ComponentBottom/CriteresContent';
import MainTitle from './MainTitle';
import './GlobalContainer.css';

class GlobalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBottomContent: {
        displayFooter: false,
        displayArticle: false,
        displayScenarios: false,
        displayCriteres: false
      }
    };
    this.handleDisplayContent = this.handleDisplayContent.bind(this);
  }

  handleDisplayContent(panelToDisplay) {
    const { [panelToDisplay]: isPanelDisplayed } = this.state.displayBottomContent;
    this.setState(prevState => ({
      ...prevState,
      displayBottomContent: {
        ...prevState.displayBottomContent,
        [panelToDisplay]: !isPanelDisplayed
      }
    }));
    // Le code ci-dessus permet d'aller chercher la valeur de state situer dans L OBJET DE UNE PROPRIÉTÉ DU STATE DE LA CLASSE ici displayFooter ou display article par exemple
    const keys = Object.keys(this.state.displayBottomContent);
    keys
      .filter(item => item !== panelToDisplay)
      .map(item =>
        this.setState(prevState => ({
          ...prevState,
          displayBottomContent: { ...prevState.displayBottomContent, [item]: false }
        }))
      );
    // Le code ci-dessus permet de mettre toute les valeur de state de l'objet displayBottomContent à false quand un est sélectionné.
  }

  render() {
    const { displayFooter } = this.state.displayBottomContent;
    const { displayArticle } = this.state.displayBottomContent;
    const { displayCriteres } = this.state.displayBottomContent;
    const { displayScenarios } = this.state.displayBottomContent;

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
      </div>
    );
  }
}
export default GlobalContainer;

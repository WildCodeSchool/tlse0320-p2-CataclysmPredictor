import React from 'react';
import PropTypes from 'prop-types';
import Planets from './Planet';
import NeoDisplay from './NeoDisplay';
import './GlobalContainer.css';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAlert: false
    };
    this.showAlert = this.showAlert.bind(this);
  }

  showAlert() {
    const { displayAlert } = this.state;
    this.setState({ displayAlert: !displayAlert });
  }

  render() {
    const { date, data } = this.props;
    const { displayAlert } = this.state;
    return (
      <div className="flex">
        <Planets />
        {displayAlert ? <h3 className="colorText absolute">Alert</h3> : null}
        <div className="flex direction end">
          {date ? (
            <h2 className="colorText">
              Astéroïdes en approche à partir du :&#141;
              {date}
            </h2>
          ) : null}
          {data ? <NeoDisplay data={data} showAlert={this.showAlert} /> : null}
        </div>
      </div>
    );
  }
}

MainApp.propTypes = {
  date: PropTypes.string.isRequired,
  data: PropTypes.shape.isRequired
};

export default MainApp;

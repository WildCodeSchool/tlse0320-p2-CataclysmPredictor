import React from 'react';
import PropTypes from 'prop-types';
import Planets from './Planet';
import NeoDisplay from './NeoDisplay';
import './GlobalContainer.css';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { date, data } = this.props;

    return (
      <div className="flex">
        <Planets />
        <div className="flex direction parent">
          {date ? (
            <h2 className="colorText">
              Astéroïdes en approche à partir du :&#141;
              {date}
            </h2>
          ) : null}
          {data ? <NeoDisplay data={data} /> : null}
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

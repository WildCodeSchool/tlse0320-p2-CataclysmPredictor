import React from 'react';
import PropTypes from 'prop-types';
import Neo from './Neo';

class NeoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // mettre a jour le state arrFilter avec data(la props qu'on envoie de GlobalContainer) avec setState
  render() {
    const { data } = this.props;
    return <div>{data ? data.map(neo => <Neo keys={neo.name} dataNeo={neo} />) : 'No-Data'}</div>;
  }
}
NeoDisplay.propTypes = {
  data: PropTypes.shape.isRequired
};

export default NeoDisplay;

import React from 'react';
import Neo from './Neo';

class NeoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrFilter: []
    };
  }

  render() {
    const { arrFilter } = this.state;
    return <div></div>;
  }
}

export default NeoDisplay;

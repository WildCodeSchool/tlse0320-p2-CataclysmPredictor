import React from 'react';

class NeoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button type="submit" onClick={() => console.log(this.props.data)}>
          click here
        </button>
      </div>
    );
  }
}

export default NeoDisplay;

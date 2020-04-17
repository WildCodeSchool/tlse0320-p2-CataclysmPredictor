import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <button type="button" className="button-nav">
          {name}
        </button>
      </div>
    );
  }
}

export default Button;

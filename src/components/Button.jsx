import React from 'react';
import UpButtons from './UpButtons';

class Button extends UpButtons {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <select>
          <option>{name}</option>
        </select>
      </div>
    );
  }
}

export default Button;

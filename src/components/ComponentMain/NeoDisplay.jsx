import React from 'react';
import Neo from './Neo';

class NeoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrFilter: []
    };
    this.formatNeosData = this.formatNeosData.bind(this);
  }

  formatNeosData(data) {
    const formattedData = Object.keys(data);
    const neoMatrix = formattedData.map(date => {
      // date "2015-09-08"
      return data[date].map(neo => {
        return {
          name: neo.name,
          magnitude: neo.absolute_magnitude_h,
          closeDate: neo.close_approach_data[0].close_approach_date,
          dander: neo.is_potentially_hazardous_asteroid
        };
      });
    });
    const flattenMatrix = neoMatrix.reduce((carry, current) => {
      current.forEach(neo => carry.push(neo));
      return carry;
    }, []);
    const filter = flattenMatrix.filter(item => item.danger === true);
    this.setState({ arrFilter: filter });
  }

  render() {
    const { arrFilter } = this.state;
    return (
      <div>
        {arrFilter.map(neo => (
          <Neo keys={neo.name} />
        ))}
      </div>
    );
  }
}

export default NeoDisplay;

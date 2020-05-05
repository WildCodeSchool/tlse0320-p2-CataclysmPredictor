import React from 'react';
import PropTypes from 'prop-types';
import Neo from './Neo';

class NeoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrFilter: []
    };

    this.formatNeosData = this.formatNeosData.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    this.formatNeosData(data);
  }

  componentDidUpdate(prevProps) {
    const { data } = this.props;
    if (prevProps !== this.props) {
      this.formatNeosData(data);
    }
  }

  formatNeosData(data) {
    const formattedData = Object.keys(data);
    /* console.log(data); */
    const neosMatrix = formattedData.map(date => {
      // date ==> "2015-09-08"
      return data[date].map(neo => {
        // neo ==> {...}
        return {
          name: neo.name,
          magnitude: neo.absolute_magnitude_h,
          closeDate: neo.close_approach_data[0].close_approach_date,
          danger: neo.is_potentially_hazardous_asteroid
        };
      });
    });
    const flattenMatrix = neosMatrix.reduce((carry, current) => {
      // current ==> [{...},{...}]
      current.forEach(neo => carry.push(neo));
      return carry;
    }, []);
    /* console.log(flattenMatrix); */
    const filter = flattenMatrix.filter(item => item.danger === true);
    /* console.log(filter); */
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
NeoDisplay.propTypes = {
  data: PropTypes.shape.isRequired
};

export default NeoDisplay;

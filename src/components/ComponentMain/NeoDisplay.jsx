import React from 'react';
import PropTypes from 'prop-types';
import Neo from './Neo';

class NeoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrFilter: [],
      magnitudeTab: null,
      maxDistance: null
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
          speed: Math.round(neo.close_approach_data[0].relative_velocity.kilometers_per_hour),
          size: neo.estimated_diameter.kilometers.estimated_diameter_max,
          magnitude: neo.absolute_magnitude_h,
          distanceKm: Math.round(neo.close_approach_data[0].miss_distance.kilometers),
          distanceLunar: Math.round(neo.close_approach_data[0].miss_distance.lunar),
          closeDate: neo.close_approach_data[0].close_approach_date,
          closeDateFull: neo.close_approach_data[0].close_approach_date_full,
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
    /* Extraire maxMagnitude */
    const magnitude = filter.map(neo => neo.magnitude);
    const max = magnitude.reduce((a, b) => {
      return Math.max(a, b);
    });
    /* Extraire distance max */
    const distance = filter.map(neo => neo.distanceLunar);
    const maxDistance = distance.reduce((a, b) => {
      return Math.max(a, b);
    });

    /* console.log(filter); */
    this.setState({ arrFilter: filter, magnitudeTab: max, maxDistance });
  }

  // Un tableau de valeur contenant toute les magnitudes
  magnitudeTab(data) {
    const magnitude = data.map(neo => neo.magnitude);
    const max = magnitude.reduce((a, b) => {
      return Math.max(a, b);
    });
    this.setState({ magnitudeTab: max });
  }

  render() {
    const { arrFilter, magnitudeTab, maxDistance } = this.state;
    return (
      <div>
        {arrFilter.map(neo => (
          <Neo
            keys={neo.name}
            dataNeo={neo}
            magnitudeTab={magnitudeTab}
            maxDistance={maxDistance}
          />
        ))}
      </div>
    );
  }
}
NeoDisplay.propTypes = {
  data: PropTypes.shape.isRequired
};

export default NeoDisplay;

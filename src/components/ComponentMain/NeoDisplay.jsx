import React from 'react';
import PropTypes from 'prop-types';
import Neo from './Neo';
import './GlobalContainer.css';

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
    const neoMatrix = formattedData.map(date => {
      // date "2015-09-08"
      return data[date].map(neo => {
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
    const flattenMatrix = neoMatrix.reduce((carry, current) => {
      current.forEach(neo => carry.push(neo));
      return carry;
    }, []);
    const filter = flattenMatrix.filter(item => item.danger === true);
    filter.splice(10, filter.length);
    const magnitude = filter.map(neo => neo.magnitude);
    const magnitudeTri = magnitude.sort((a, b) => a - b);
    filter.map(neo =>
      Object.defineProperty(neo, 'indiceMagnitude', {
        value: magnitudeTri.indexOf(neo.magnitude) + 1,
        enumerable: true
      })
    );
    /* Ajout de la propriété indice distance */
    const distance = filter.map(neo => neo.distanceLunar);
    const distanceTri = distance.sort((a, b) => a - b);
    filter.map(neo =>
      Object.defineProperty(neo, 'indiceDistance', {
        value: distanceTri.indexOf(neo.distanceLunar) + 1,
        enumerable: true
      })
    );
    /* Ajout d'un indiceSize */
    const size = filter.map(neo => neo.size);
    const sizeTri = size.sort((a, b) => a - b);

    filter.map(neo =>
      Object.defineProperty(neo, 'indiceSize', {
        value: sizeTri.indexOf(neo.size),
        enumerable: true
      })
    );
    this.setState({ arrFilter: filter });
  }

  render() {
    const { arrFilter } = this.state;
    const { showAlert } = this.props;

    return (
      <div className="grid">
        {arrFilter.map(neo => (
          <Neo keys={neo.name} dataNeo={neo} showAlert={showAlert} />
        ))}
      </div>
    );
  }
}
NeoDisplay.propTypes = {
  data: PropTypes.shape.isRequired,
  showAlert: PropTypes.func.isRequired
};

export default NeoDisplay;

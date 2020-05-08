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
    console.log(data);
    const formattedData = Object.keys(data);
    console.log(formattedData);
    const neosMatrix = formattedData.map(date => {
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

    /* console.log(filter); */

    this.setState({ arrFilter: filter });
  }

  render() {
    const { arrFilter } = this.state;

    return (
      <div className="grid">
        {arrFilter.map(neo => (
          <Neo keys={neo.name} dataNeo={neo} />
        ))}
      </div>
    );
  }
}
NeoDisplay.propTypes = {
  data: PropTypes.shape.isRequired
};

export default NeoDisplay;

import React, { Component } from 'react';
import Neow from './Neow';
import neosData from './objects.json';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      neos: neosData
    };
  }

  formatNeosData = () => {
    const { near_earth_objects: data } = this.state.neos;
    const formattedData = Object.keys(data);
    console.log(data);
    const neosMatrix = formattedData.map(date => {
      // date ==> "2015-09-08"
      return data[date].map(neo => {
        // neo ==> {...}
        return {
          name: neo.name,
          magnitude: neo.absolute_magnitude_h,
          distanceFromEarth: neo.close_approach_data[0].miss_distance.kilometers,
          date
        };
      });
    });
    const flattenMatrix = neosMatrix.reduce((carry, current) => {
      // current ==> [{...},{...}]
      current.forEach(neo => carry.push(neo));
      return carry;
    }, []);
    console.log(flattenMatrix);
  };

  countobjectJSON(file) {
    /*
    const neo = file.near_earth_objects
    const date = neo["2015-09-08"]
    const nbOfNeos = date.length;
    console.log(nbOfNeos)*/
    // nbOfNeos = 0;
    // for (let i = 0; i < nbOfNeos.length; i++) {
    //     for (props in neo) {
    //         document.write(nbOfNeos[2015-09-08]);
    //     }
    // } console.log(nbOfNeos);
    // return nbOfNeos;
  }

  render() {
    this.formatNeosData();
    return (
      <div>
        <Neow />
      </div>
    );
  }
}

export default Sort;

import React from 'react';
import axios from 'axios';

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.loadNeow = this.loadNeow.bind(this);
  }

  componentDidMount() {
    this.loadNeow();
  }

  loadNeow() {
    const date = '2020-12-08';
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&api_key=DEMO_KEY`;
    axios
      .get(url)
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({ data: data.near_earth_objects });
      });
  }

  render() {
    const data = Object.keys(this.state);
    return (
      <div>
        <p>{data}</p>
      </div>
    );
  }
}

export default Request;

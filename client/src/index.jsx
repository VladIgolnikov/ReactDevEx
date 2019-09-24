import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: [],
      versions: []
    };

    this.getAssets = this.getAssets.bind(this);
    this.getVersions = this.getVersions.bind(this);
  }

  componentDidMount() {
    this.getAssets;
    this.getVersions;
  }

  getAssets() {
    Axios.get('/assets')
      .then(response => {
        const assets = response.data;
        this.setState({
          assets: assets
        });
      })
      .catch(error => {
        console.log(`Error getting assets --> ${error}`);
      });
  }

  getVersions() {
    Axios.get('/versions')
      .then(response => {
        const versions = response.data;
        this.setState({
          versions: versions
        });
      })
      .catch(error => {
        console.log(`Error getting versions --> ${error}`);
      });
  }

  render() {
    return <div className='app'></div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

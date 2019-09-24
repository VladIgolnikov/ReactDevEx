import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: []
    };

    this.getAssets = this.getAssets.bind(this);
  }

  componentDidMount() {
    this.getAssets();
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

  render() {
    return <div className='app'></div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

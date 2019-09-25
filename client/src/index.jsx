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
    const assets = this.state.assets;

    return (
      <div className='app'>
        <header className='navbar'>
          <div className='nav-header'>
            <div className='nav-left'>
              <div className='logo'>
                <img className='brand-image' src='' />
              </div>
              <div className='menu-toggle'>
                <img src='' />
              </div>
            </div>
            <div className='page-title'>
              <span>
                <img className='folder-icon' src='' />
                <h1>Asset Management</h1>
                <button className='add-button'> +Add</button>
                <ul className='breadcrumb'>
                  <li>Asset Management</li>
                </ul>
              </span>
            </div>
            <div className='nav-right'>
              <img className='nav-toggle' src='' />
              <img className='user-toggle' src='' />
            </div>
          </div>
          <div className='nav-search'>
            {/* Search component goes here with Filter component in it */}
          </div>
        </header>
        <div className='main'></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

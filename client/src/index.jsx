import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Assets from './components/assets.jsx';

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
              <span className='logo'>
                <img className='brand-image' src='./img/logo_cic.png' />
              </span>
              <span className='menu-toggle'>
                <img src='./img/menu-icon.png' />
              </span>
            </div>
            <div className='page-title'>
              <span className='icon-span'>
                <img className='folder-icon' src='./img/folder-icon.png' />
                Asset Management
                <button className='add-button'> + Add</button>
              </span>
              <span className='breadcrumb-span'>
                <ul className='breadcrumb'>
                  <li>Asset Management</li>
                </ul>
              </span>
            </div>
            <div className='nav-right'>
              <img className='nav-toggle' src='./img/nav-toggle.png' />
              <img className='user-toggle' src='./img/avatar.png' />
            </div>
          </div>
          <div className='nav-search'>
            {/* Search component goes here with Filter component in it */}
          </div>
        </header>
        <div className='main'>
          <Assets assets={assets} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

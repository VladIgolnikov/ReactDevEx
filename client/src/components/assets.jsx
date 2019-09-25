import React from 'react';

const Assets = props => {
  return (
    <ul className='assets'>
      {props.assets.map(asset => {
        return (
          <li className='asset-card' key={asset.id}>
            <div className='asset-container'>
              <img
                className='asset-image'
                src={asset.imgsrc || './img/adobe-pdf-icon.png'}
              />
              <div className='asset-info'>
                <p className='asset-title'>{asset.name}</p>
                <div className='asset-row'>
                  <p className='asset-id'>ID: {asset.id}</p>
                  <p className='asset-client'>Client: {asset.client}</p>
                </div>
                <p className='asset-store'>Store: {asset.store}</p>
                <p className='asset-type'>Asset Type: {asset.type}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Assets;

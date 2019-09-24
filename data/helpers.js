const db = require('./index');

const getAssets = () => {
  return new Promise((res, rej) => {
    let assets;
    let fullAssets;
    let versions;

    db.serialize(() => {
      db.all(`SELECT * FROM assets`, (err, rows) => {
        if (err) {
          console.log(`Error retrieving assets from ReactDevEx DB >> ${err}`);
          rej(err);
        } else {
          console.log(`Success! Retrieved assets from ReactDevEx DB`);
          assets = rows;
        }
      }).all(
        `SELECT * FROM versions WHERE assetId IN (SELECT id FROM assets)`,
        (err, rows) => {
          if (err) {
            console.log(
              `Error retrieving versions from ReactDevEx DB >> ${err}`
            );
            rej(err);
          } else {
            console.log(`Success! Retrieved versions from ReactDevEx DB`);

            versions = rows;

            fullAssets = assets.map(asset => {
              let newAsset = asset;
              newAsset.versions = [];
              for (let version of versions) {
                if (version.assetId === newAsset.id) {
                  newAsset.versions.push(version);
                }
              }
              return newAsset;
            });

            res(fullAssets);
          }
        }
      );
    });
  });
};

module.exports = getAssets;

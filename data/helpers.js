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
              asset.versions = [];
              for (let version of versions) {
                if (version.assetId === asset.id) {
                  asset.versions.push(version);
                }
              }
              return asset;
            });

            res(fullAssets);
          }
        }
      );
    });
  });
};

module.exports = getAssets;

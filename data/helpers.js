const db = require('./index');

const getAssets = () => {
  return new Promise((res, rej) => {
    db.all(`SELECT * FROM assets`, (err, rows) => {
      if (err) {
        console.log(`Error retrieving assets from ReactDevEx DB >> ${err}`);
        rej(err);
      } else {
        console.log(`Success! Retrieved assets from ReactDevEx DB`);
        res(rows);
      }
    });
  });
};

const getVersions = () => {
  return new Promise((res, rej) => {
    db.all(`SELECT * FROM versions`, (err, rows) => {
      if (err) {
        console.log(
          `Error retrieving versions from ReactDevEx DB >> ${err}`
        );
        rej(err);
      } else {
        console.log(
          `Success! Retrieved versions from ReactDevEx DB`
        );
        res(rows);
      }
    });
  });
};


module.exports.getAssets = getAssets;
module.exports.getVersions = getVersions;
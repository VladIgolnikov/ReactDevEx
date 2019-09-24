const db = require('./index.js');

const getAssets = searchTerms => {
  return new Promise((res, rej) => {
    db.all(
      `SELECT * FROM assets`,
      (err, rows) => {
        if (err) {
          console.log(`Error retrieving assets from ReactDevEx DB >> ${err}`);
          rej(err);
        } else {
          console.log(`Success! Retrieved assets from ReactDevEx DB`);
          res(rows);
        }
      }
    );
  });
};

const getAssets = () => {
  return new Promise((res, rej) => {
    db.all(
      `SELECT * FROM assets`,
      (err, rows) => {
        if (err) {
          console.log(`Error retrieving assets from ReactDevEx DB >> ${err}`);
          rej(err);
        } else {
          console.log(`Success! Retrieved assets from ReactDevEx DB`);
          res(rows);
        }
      }
    );
  });
};

const getCounts = (id) => {
  return new Promise((res, rej) => {
    db.all(
      `SELECT COUNT(*) FROM versions WHERE assetId = ${id};`,
      (err, rows) => {
        if (err) {
          console.log(`Error retrieving version count from ReactDevEx DB >> ${err}`);
          rej(err);
        } else {
          console.log(`Success! Retrieved version count from ReactDevEx DB`);
          res(rows);
        }
      }
    );
  });
};

const getVersions = (id) => {
  return new Promise((res, rej) => {
    db.all(
      `SELECT * FROM versions WHERE assetId = ${id};`,
      (err, rows) => {
        if (err) {
          console.log(`Error retrieving versions for asset ${id} from ReactDevEx DB >> ${err}`);
          rej(err);
        } else {
          console.log(`Success! Retrieved versions for asset ${id} from ReactDevEx DB`);
          res(rows);
        }
      }
    );
  });
};

module.exports.getAssets = getAssets;
module.exports.getCounts = getCounts;
module.exports.getVersions = getVersions;
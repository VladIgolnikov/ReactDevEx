const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const assets = require('./assets');

const dbPath = path.join(__dirname, 'Assets.db');

const db = new sqlite3.Database(dbPath, err => {
  if (err) {
    console.error(
      `ERROR >> could not connect to ReactDevEx DB >> ${err.message}`
    );
  } else {
    console.log(`<< Connected to ReactDevEx DB >>`);
  }
});

db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS assets`)
    .run(
      `CREATE TABLE assets (id INTEGER PRIMARY KEY, name TEXT, client TEXT, store TEXT, type TEXT, imgsrc TEXT)`,
      err => {
        if (err) {
          console.error(
            `ERROR >> could not create assets table >> ${err.message}`
          );
        } else {
          console.log(`- Created assets table -`);
        }
      }
    )
    .run(`DROP TABLE IF EXISTS versions`)
    .run(
      `CREATE TABLE versions (id INTEGER PRIMARY KEY, assetId INTEGER, logoType TEXT, stitchCount TEXT, isResizable INTEGER, description TEXT, colors TEXT, sizeHeight FLOAT, sizeWidth FLOAT, sizeDimension TEXT, imgsrc TEXT, FOREIGN KEY(assetId) REFERENCES assets(id))`,
      err => {
        if (err) {
          console.error(
            `ERROR >> could not create versions table`,
            err.message
          );
        } else {
          console.log(`- Created versions table -`);
        }
      }
    );
});

assets.forEach(asset => {
  db.run(
    `INSERT OR IGNORE INTO assets (id, name, client, store, type, imgsrc) VALUES (?, ?, ?, ?, ?, ?)`,
    [
      asset.id, 
      asset.name, 
      asset.client, 
      asset.store, 
      asset.type, 
      asset.imgsrc
    ],
    err => {
      if (err) {
        console.error(`ERROR >> could not seed assets table >> ${err.message}`);
      }
    }
  );
});

assets.forEach(asset => {
  let versions = asset.versions;
  versions.forEach(version => {
    db.run(
      `INSERT OR IGNORE INTO versions (id, assetId, logoType, stitchCount, isResizable, description, colors, sizeHeight, sizeWidth, sizeDimension, imgsrc) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        version.id,
        asset.id,
        version.logoType,
        version.stitchCount,
        version.isResizable,
        version.description,
        JSON.stringify(version.colors),
        version.sizeHeight,
        version.sizeWidth,
        version.sizeDimension,
        version.imgsrc
      ],
      err => {
        if (err) {
          console.error(
            `ERROR >> could not seed versions table >> ${err.message}`
          );
        }
      }
    );
  });
});

db.close(err => {
  if (err) {
    return console.error(err.message);
  }
  console.log(`<< Closed ReactDevEx DB connection >>`);
});

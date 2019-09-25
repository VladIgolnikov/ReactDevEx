const getAssets = require('./helpers');

describe('Test the DB query', () => {
  test('It should resolve with 3 assets', () => {
    return getAssets().then(rows => {
      expect(rows.length).toEqual(3);
    });
  });

  test('Each asset should have more than one version', () => {
    return getAssets().then(rows => {
      let versions = 1;
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].versions.length === 0) {
          versions = 0;
        }
      }
      expect(versions).toEqual(1);
    });
  });
});

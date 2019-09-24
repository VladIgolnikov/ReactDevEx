const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const { getAssets, getVersions } = require('../data/helpers');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.send('Welcome to ReactDevEx!');
});

app.get('/api', (req, res) => {
  getAssets()
    .then(results => {
      res.send(results);
    })
    .catch(error => {
      console.log(`Error retrieving assets --> ${error}`);
    });
});

app.post('/api', (req, res) => {
  const id = req.body.id;
  getVersions(id)
    .then(results => {
      res.send(results);
    })
    .catch(error => {
      console.log(`Error retrieving versions for id ${id} --> ${error}`);
    });
});

module.exports = app;

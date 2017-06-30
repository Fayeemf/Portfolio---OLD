const path = require('path');
const data = require('../data/data');
const utils = require('../utils');

module.exports = app => {
  app.get('/', function (req, res) {
    res.render('index.nunj', { title: 'Home' });
  });

  app.get('/projects', function (req, res) {
    res.render('projects.nunj', { title: 'Projects', data, utils });
  });
};
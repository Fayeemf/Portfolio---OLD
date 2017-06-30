const path = require('path');
const data = require('../data/data');
const utils = require('../utils');

module.exports = app => {
  app.get('/', function (req, res) {
    res.render('index.nunj', { title: 'Home', page: 'Home' });
  });

  app.get('/projects', function (req, res) {
    res.render('projects.nunj', { title: 'Projects', page: 'Projects', data, utils });
  });

  app.get('/skills', function (req, res) {
    res.render('skills.nunj', { title: 'Skills', page: 'Skills', data, utils });
  });

  app.get('/project/:name', function (req, res) {
    const project = data.projects.filter(x => x.id === req.params.name)[0];
    if (!project) {
      return res.send('404');
    }
    res.render('project.nunj', { title: project.name, page: 'Projects', data, utils, project });
  });
};

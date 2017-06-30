const fs   = require('fs');
const path = require('path');
const marked = require('marked');
const data = require('./data/data');

function readProjects(rootDir) {
  try {
    const projects = [];
    fs.readdirSync(rootDir).forEach(file => {
      if (path.extname(file) === '.md') {
        projects.push(marked(fs.readFileSync(path.resolve(rootDir, file), 'utf8')));
      }
    });
    return projects;
  } catch (e) {
    console.error(e);
    return null;
  }
}

function getProjectContent(filename) {
  return marked(fs.readFileSync(path.resolve(__dirname, 'data/projects', filename), 'utf8'));
}

function getSkillById(id) {
  return data.skills.filter(x => x.id === id)[0];
}

module.exports = {
  readProjects,
  getProjectContent,
  getSkillById
};
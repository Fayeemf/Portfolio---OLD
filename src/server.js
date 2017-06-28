const express = require('express');
const app = express();
const config = require('./config');
const nunjucks = require('nunjucks');

app.use(express.static('./dist'));

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

const routes = require('./routes/routes')(app);
app.listen(config.PORT, function () {
  console.log(`Server app listening on port ${config.PORT}`);
});

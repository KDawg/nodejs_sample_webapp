const site = require('./site.js');

exports.setup = (app) => {
  app.get('/', site.index);
  app.get('/hello', site.getHello);
};

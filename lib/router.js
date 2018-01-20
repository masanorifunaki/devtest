'use strict';
const homeHandler = require('./home-handler');

function route(req, res) {
  switch (req.url) {
    case '/home':
      homeHandler.handle(req, res);
      break;
    default:
      break;
  }
}

module.exports = {
  route: route
};
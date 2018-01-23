'use strict';
const homeHandler = require('./home-handler');
const nicknameHandler = require('./nickname/handler');

function route(req, res) {
  switch (req.url) {
    case '/home':
      homeHandler.handle(req, res);
      break;
    case '/nickname':
      nicknameHandler.handle(req, res);
      break;
    case '/css/style.css':
      homeHandler.handleStyleCss(req,res);
      break;
    // TODO JSファイルの読み込み方法を調べる
    // case './js/assessment.js':
    //   homeHandler.handleJsAssessment(req,res);
    //   break;
    default:
      break;
  }
}

module.exports = {
  route: route
};
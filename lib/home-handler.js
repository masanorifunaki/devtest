'use strict';
const jade = require('jade');
const fs = require('fs');


function handle(req,res){
  switch (req.method) {
    case 'GET':
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
    res.end(jade.renderFile('./views/index.jade', {}));
    break;
    case 'POST':
      break;
    default:
      break;
  }
}

function handleStyleCss(req, res) {
  fs.readFile('./css/style.css', 'UTF-8',(err, data) => {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(data);
    res.end();
});
}

// function handleJsAssessment(req, res) {
//   fs.readFile('../js/assessment.js', 'UTF-8',(err, data) => {
//     res.writeHead(200, {'Content-Type': 'text/javascript'});
//     res.write(data);
//     res.end();
// });
// }

module.exports = {
  handle: handle,
  handleStyleCss: handleStyleCss
};
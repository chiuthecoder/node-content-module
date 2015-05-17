var path = require('path');
var fs = require('fs');

module.exports = function(request, response) {
  var url = request.url;
  response.writeHead(200, {'Content-type': 'text/html'});
  if(path.dirname(url) === '/private' || url === '/private') {
    response.writeHead(403, {'Content-type': 'text/html'});
    response.end();
  } else if(url === '/') {
    fs.readFile('views/index.html', 'utf-8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  } else if(url === '/dojos' || url === '/dojos.html') {
    fs.readFile('views/dojos.html', 'utf-8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  } else if(url === '/cars' || url === '/cars.html') {
    fs.readFile('views/cars.html', 'utf-8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  } else if(url === '/cats' || url === '/cats.html') {
    fs.readFile('views/cats.html', 'utf-8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  } else if(path.dirname(url) === '/images') {
    fs.readFile('.'+url, function (errors, contents){
      if(contents) {
        response.writeHead(200, {'Content-type': 'img/jpg'});
        response.write(contents);
        response.end();
      } else {
        response.writeHead(404, {'Content-type': 'img/jpg'});
        response.end();
      }
    });
  } else if(path.extname(url) === '.css'){
    fs.readFile('.'+url, function (errors, contents){
      response.writeHead(200, {'Content-type': 'text/css'});
      if(contents) {
        response.write(contents);
        response.end();
      } else {
        response.writeHead(404, {'Content-type': 'text/css'});
        response.end();
      }
    
    });
  } else {
    response.writeHead(404, {'Content-type': 'text/html'});
    response.write('File not found!!!');
    response.end();
  }

}
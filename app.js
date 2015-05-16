//http server
var http = require('http');
var fs = require('fs');
var static_contents = require('./static.js');
//creating a server
server = http.createServer(function (request, response){
  static_contents(request, response);  //this will serve all static files automatically
});

server.listen(7500);
console.log("Yes, it is Running in localhost at port 7500");

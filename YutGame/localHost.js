const http = require("http");
const fs = require("fs");
http.createServer(function (request, response) {
  console.log(request.method);
  console.log(response.url);
  response.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile(, function (){
    
  })
});

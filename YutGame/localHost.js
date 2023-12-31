const http = require("http");
const fs = require("fs");
http
  .createServer(function (request, response) {
    console.log(request.method);
    console.log(response.url);
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./yutGame.html", function (err, data) {
      if (err) {
        console.error("파일을 읽지 못했습니다.");
      } else {
        response.end(data);
      }
    });
  })
  .listen(8000);

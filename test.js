const http = require("http");

const port = process.env.PORT || 3000;
const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("This is the test server1");
    res.end();
  } else if (req.url === "/health1") {
    res.writeHead(204);
    res.write("");
    res.end();
  } else if (req.url === "/ping1") {
    console.log("In ping1");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("pong1");
    res.end();
  } else res.end("Invalid Request!");
  
});

server.listen(port, function () {
  const { address } = server.address();
  console.log(`App listening at http://${address}:${port}`);
});

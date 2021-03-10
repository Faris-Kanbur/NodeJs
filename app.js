var http = require("http");

http.createServer(function(req, res) {
    res.write("Add hello world");
    res.end();
}).listen(8080);
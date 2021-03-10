var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write(req.url); 

    if (req.url == "/homepage") res.write("Welcame to main Page");
    else if (req.url == "/login") res.write("Welcome to use Page");

    res.end();
}).listen(8081);
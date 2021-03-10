var http = require("http");
var date = require("./mymodule");

http.createServer(function (req, res) {
    res.end("You can see your time here:" + date.myDateTime());
    
}).listen(8080);
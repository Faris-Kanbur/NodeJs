var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
    fs.readFile("page.html", function(error, data) {
        if (error) throw error
        res.end(data);
    })
}).listen("8083")
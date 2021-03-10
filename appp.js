var http = require("http");
var url = require("url");

http.createServer(function( req, res) {
    var q = url.parse(req.url,true).query;
    var txt = "name :"+q.name+ "lastname :"+q.lastname+"country:"+q.country;
    res.end(txt)
    
}).listen(8082);
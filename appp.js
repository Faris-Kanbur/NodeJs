// var http = require("http");
// var url = require("url");

// http.createServer(function( req, res) {
//     var q = url.parse(req.url,true).query;
//     var txt = "name :"+q.name+ "lastname :"+q.lastname+"country:"+q.country;
//     res.end(txt)
    
// }).listen(8082);


//////////////////////////////////////////

var url = require("url");
// var adr = "http://localhost:8080/login?year=2017&monat=April"
var adr = "http://localhost:8080/default.html?year=2017&monat=April&day=Montag"
var q = url.parse(adr, true);

// if (q.pathname == "/login") console.log("Giris sayfasina hosgeldiniz");

console.log(q.host);
console.log(q.pathname);
console.log(q.search);


console.log("--------------------------------")

var qdata = q.query;

console.log(qdata.year);
console.log(qdata.day);

console.log("Year: "+qdata.year+ " Day: "+qdata.day);
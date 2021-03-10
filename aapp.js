var http = require("http");
var fs = require("fs");


// http.createServer(function(req, res) {
//     fs.readFile("page.html", function(error, data) {
//         if (error) throw error
//         res.end(data);
//     })
// }).listen("8083")


// http.createServer(function(req, res) {
//         fs.appendFile("metin.txt", ", Audi",function(error) {
//             if (error) throw error
//             console.log("registired")
//         })
//     }).listen("8083")


// http.createServer(function(req, res) {
//     fs.open("newfile", "w", function(error){   // to create or over write
//         console.log("Created File")
//     });
// }).listen(8083)


// http.createServer(function(req, res) {
//     fs.writeFile("newfile.txt", "This is my World Man Thank you to visit me", function(error){
//         console.log("add what i want  and changed");
//     });
// }).listen(8083);


// http.createServer(function(req, res){
//     fs.unlink("newfile.txt" , function(error) {
//         console.log("deleted");
//     });
// }).listen(8083);


http.createServer(function(req, res) {
    fs.rename("metin.txt", "orginal.txt", function(error){
        console.log("name changed")
    });
}).listen(8083);

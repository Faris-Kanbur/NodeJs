var formmidable = require("formidable");
var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
    if (req.url == "/dosyayukleme"){
        var form = new formmidable.IncomingForm();
        form.parse(req, function(error, fields, files) {
            var yuklenendosyayolu = files.yuklenendosya.path;
            var nereyeyuklenecek = 'C:/Users/faris/Desktop'+ files.yuklenendosya.name;

            fs.rename(yuklenendosyayolu, nereyeyuklenecek, function(error){
                if (error) throw error;
                res.write("Dosya yüklendi ve tasindi")
                res.end();
            });
        });

    }
    else {

        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<form action ='dosyayukleme' method='post' enctype='multipart/form-data'>");
        res.write("<input type='file' name='yuklenendosya'> <br> ");
        res.write("<input type='submit' >");
        res.write("</form>");
        return res.end();
    }
}).listen(8088)
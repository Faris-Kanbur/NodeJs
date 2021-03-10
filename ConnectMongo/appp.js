var MongoClient = require("mongodb").MongoClient;
var connection = "mongodb+srv://javascriptmastery:faris5016@cluster0.yp6xf.mongodb.net/<dbname>?retryWrites=true&w=majority"

MongoClient.connect(connection, {useNewUrlParser:true}, function(error, db) {
    if (error) throw error;
    var dbo = db.db("database");
    dbo.collection("müsteriler").findOne({isim: Faris}, function(err, result){ // bir tane ver cekmek icin
        if (error) throw error;
        console.log(result.il);
        db.close();
    });

    dbo.collection("müsteriler").find({}, function(err, result){ // tüm verileri cekmek icin
        if (error) throw error;
        console.log(result);
        db.close();
    });

});
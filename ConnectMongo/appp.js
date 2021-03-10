var MongoClient = require("mongodb").MongoClient;
var connection = "mongodb+srv://javascriptmastery:faris5016@cluster0.yp6xf.mongodb.net/<dbname>?retryWrites=true&w=majority"

MongoClient.connect(connection, {useNewUrlParser:true}, function(error, db) {
    if (error) throw error;
    var dbo = db.db("database");
    // dbo.collection("müsteriler").findOne({isim: Faris}, function(err, result){ // bir tane ver cekmek icin
    //     if (error) throw error;
    //     console.log(result.il);
    //     db.close();
    // });

    // dbo.collection("müsteriler").find({}, function(err, result){ // tüm verileri cekmek icin
    //     if (error) throw error;
    //     console.log(result);
    //     db.close();
    // });
    
    // dbo.collection("müsteriler").find({}).sort({isim: -1}).toArray(function(err, result){ // tüm verileri cekmek icin
    // if (error) throw error;
    //     console.log(result);
    //     db.close();
    
    // });

    dbo.collection("müsteriler").deleteOne({},function(err){ // bir tane veri silmek icin belli bir se icin de ( icine isim : faris gibi belirtebilriisn) 
    if (error) throw error;
        console.log("Silindi");
        db.close();
    
    });

    dbo.collection("müsteriler").deleteOne({},function(err){ // tüm verileri silmek icin
    if (error) throw error;
        console.log("Silindi");
        db.close(); 
    
    });
});
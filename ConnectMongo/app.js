// const mongoose = require("mongoose");
// const connection = "mongodb+srv://javascriptmastery:faris5016@cluster0.yp6xf.mongodb.net/<dbname>?retryWrites=true&w=majority"

// mongoose.connect(connection, {useNewUrlParser:true}, function(error) {
//     if(error) throw error;
//     console.log("Baglanti Basarili");
// });

///////////////////////////////////////

var MongoClient = require("mongodb").MongoClient;
var connection = "mongodb+srv://javascriptmastery:faris5016@cluster0.yp6xf.mongodb.net/<dbname>?retryWrites=true&w=majority"

MongoClient.connect(connection, {useNewUrlParser:true}, function(error, db) {
    if (error) throw error;
    console.log("Data basa created");
    
    var dbo = db.db("database"); // veri tabinini olsuturdu
    dbo.createCollection("Custom3", function(error, result){ //collection olusturdi
        if(error) throw error;
        console.log("Table Created");

    });

    // var data= { isim: "Ali Kaya", il:"Yalova"}; // veri tabanina bilgi ekledik
    var data= [
        { isim: "Ali ", il:"Yalova"},
        { isim: "Faris", il:"Kayseri"},
        { isim: "Silamer", il:"Bursa"}
    ]; // veri tabanina toplu bilgi ekledik
    dbo.collection("Custom3").insertMany(data, function(error) {
        if(error) throw error;
        console.log("data added!");
        db.close();
    })
});
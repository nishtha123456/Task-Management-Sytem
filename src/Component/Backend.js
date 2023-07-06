var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/* MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  dbo.createCollection("Tasks", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
}); */
 //Inserting data
 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Asha", title: "project1",description:'coding',due_date:'22/8/23',status:'true',assigned_user:'asha' };
  dbo.collection("Tasks").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
const express = require('express');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var Users=[]
 const app = express()

   const port = 5000
   cors = require("cors");

   app.use(cors());
   app.use(express.urlencoded({extended:true}))
app.use(express.json())
/* MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  dbo.createCollection("Tasks", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
}); */


/* MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("mydb");
 var myobj = { id:1,name: "pen", Price:40,Quantity:4};
 dbo.collection("cart").insertOne(myobj, function(err, res) {
   if (err) throw err;
   console.log("1 document inserted");
   db.close();
 });
});*/
app.listen(port, () => {
 console.log(`Example app listening on port ${port} `)
 
})
app.get('/', async(req, res) => {
 MongoClient.connect(url, function(err, db) {
   var dbo = db.db("mydb");
   dbo.collection("Tasks").find({}).toArray(function(err, result) {
 
     if (err) throw err;
     console.log(result);
     Users=result;
   res.send(result)
      db.close();
    });
 });
});
app.get('/sort', async(req, res) => {
  MongoClient.connect(url, function(err, db) {
    var dbo = db.db("mydb");
    var mysort = { title: 1 };

    dbo.collection("Tasks").find({}).sort(mysort).toArray(function(err, result) {
  
      if (err) throw err;
      console.log(result);
      Users=result;
    res.send(result)
       db.close();
     });
  });
 });

app.post('/', async(req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = req.body;
    dbo.collection("Tasks").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
     });
  });
 });

 app.delete('/', (req, res) => {
  res.send("delete Request Called")
  console.log("data",req.body.id)

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj =req.body;
    dbo.collection("Tasks").deleteOne(req.body, function(err, res) {
      if (err) throw err;
      console.log(" documents deleted");
      db.close();
    });
  });

});
app.put('/', (req, res) => {
  //res.send("patch Request Called")


  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj =req.body.title;
    console.log("data",req.body)
    
    var myquery = { title:req.body.title };
  var newvalues = { $set: {description:req.body.description, status: req.body.status,due_date:req.body.due_date,assigned_user:req.body.assigned_user } };
  dbo.collection("Tasks").updateOne(myquery, newvalues, function(err, result) {
    if (err) throw err;
     res.send(result);
      console.log(" documents updated");
      db.close();
    });
  });

});


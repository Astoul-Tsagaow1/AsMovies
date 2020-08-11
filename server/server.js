console.log("app is loading .... :)");

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
const database = "asmovies"
const collctions = "usermovies"
const express = require('express')
const app = express();
app.use(express.json());

const wishlist= []

let PORT = process.env.PORT || 5000 ;



app.get('/api',(req , res) =>{

    console.log(req.params.id);
  res.send({ res: "result from server 123" });
    
    
})

app.post('/wishlist',(req,res)=>{


  console.log(req.body, "post req");
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(database);
    // var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection(collctions).insertOne(req.body, function(err, responseFromDb) {
      if (err) throw err;
      console.log("1 document inserted");
  res.send(responseFromDb).status(200)

      db.close();
    });
  });
})

app.get('/wishlist',(req,res)=>{

  console.log(req.params.id);

  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("mydb");
  //   dbo.collection("customers").findOne({}, function(err, result) {
  //     if (err) throw err;
  //     console.log(result.name);
  //     db.close();
  //   });
  // });
  res.send(wishlist).status(200)
})

app.delete(`/deleteItem/:id`, (req, res) => {

  console.log(req.params.id,"req.params.id");
let renovelist =[]
  for (let i = 0; i < wishlist.length; i++) {

 if (wishlist[i].movie.id === req.params.id){

console.log(wishlist[i].movie,"wishlist[i].movie");

 renovelist = wishlist.splice(wishlist[i] ,1)
console.log(renovelist,"after delete");

/// hendel delete

 }
  }

  res.send(renovelist)
  
 
})

app.listen(PORT ,()=>{
 console.log(`app is lisening to port ${PORT}`);
 

})
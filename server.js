const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require ("mongoose");
const bodyParser=require("body-parser");
const shortId=require("shortid");
const validUrl=require("valid-url");
const dotenv = require("dotenv");
dotenv.config();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/public', express.static(`${process.cwd()}/public`));

//mongo db and mongoose process
const URI=process.env["MONGO_URI"];

mongoose.connect(URI);

const connection=mongoose.connection;
connection.on("error",()=>console.log("connection error"));
connection.on("open",()=>console.log("connection success"));

//creating a new schema
const Schema=mongoose.Schema;
const urlSchema= new Schema({
  original_url:String,
  short_url:String
});

//creating a new model
const URL=mongoose.model("url",urlSchema);


app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});
// console.log(shortId.generate());


//creating post route for geting new url 
//using async function because it has to wait till programs looks in to the database and find what he is looking for
app.post("/api/shorturl" ,async function(req,res){
  const requrl=req.body.url;
  // console.log(!validUrl.isWebUri(requrl))
  if(!validUrl.isWebUri(requrl)){
    res.json({error:"invalid url"});
  }
  else{
    let findUrl = await URL.findOne({
      original_url:requrl
    });

    if(findUrl){
      res.json({
        original_url:findUrl.original_url,
        short_url:findUrl.short_url
      });
      //if he finds the url then res should end
      res.end();
    }else{
      const shorturl=shortId.generate();

      var newURL= new URL({
        original_url:requrl,
        short_url:shorturl
      });
      await newURL.save();
      res.json({
        original_url:newURL.original_url,
        short_url:newURL.short_url
      });
      res.end();
      }
    
  }
});
app.get("/api/shorturl/:short_url", async function(req,res){
  const shorturl=req.params.short_url;
  var findURL=await URL.findOne({short_url:shorturl});
  //if he finds the url than it should redirected it to that url else throw error

  if(findURL){
    res.redirect(findURL.original_url);
  }else{
    res.status(404).json("No URL found");
  }
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

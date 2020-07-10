var express=require("express"),
    app=express(),
    mongoose=require("mongoose"),
    bodyParser = require("body-parser");
//cors policy
var cors = require("cors");
 //routes
 const csiPage = require("./routes/csiPage");

 //mongoDb connection
 /*
 create mongoURI at mongo atlas and paste in config folder and then uncomment the below lines
*/
 //  const db = require("./config/mongoDb").mongoURI;
//  mongoose.connect(db,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//  })
//  .then(() => console.log("Mongodb Connected"))
//   .catch(err => console.log(err));
// mongoose.Promise = global.Promise;

//  app config
app.use(express.static("public"));
app.set("view engine","ejs");


app.use(bodyParser.json());

app.use(cors());

//express app routes
app.use("", csiPage);


//Db config
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
 .then(()=> console.log('MongoDb Connected...'))
 .catch(err=> console.log(err));

//error handling middle ware
app.use((err, req, res, next) => {
    res.status(422).send({
      error: err.message
    });
  });

//listen for request
app.listen(process.env.PORT || 3000, () => {
    console.log("somone started the server");
  });

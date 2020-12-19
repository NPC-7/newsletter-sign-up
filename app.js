//jshint ESversion 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function (req, res) {
  res.sendFile(__dirname+"/signup.html");
})

app.post("/", function (req, res) {

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  console.log(firstName);
  console.log(lastName);
  console.log(email);

});

app.listen(3000,function () {
  console.log("The server is running on port 3000");
})



//API Key
//e5fcad799719a759ab85495e37b52a1a-us7

//List id
//19d58d4d88

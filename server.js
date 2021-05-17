const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extend: true}));

app.get("/",function(req, res){
   res.sendfile(_dirname+"/index.html");
   });

app.post("/",function(req,res){
  var n1 = req.body.num1;
  var n2 = req.body.num2;
  var result = n1/(n1*n2);
  res.send("The answer is" + result);
});

app.listen(3000,function(){
 console.log("Server has started on port 3000");
});

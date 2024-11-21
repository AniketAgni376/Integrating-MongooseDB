const express = require('express');
const app = express();
const mongooseconnection = require("./config/mongoose");
const userModel = require("./models/user");
const debuglog = require("debug")("development:app");

debuglog.enabled=true;

app.get("/", function(req, res, next){
     res.send("hey");
})

//********1)Create*********/
// app.get("/create", async function(req, res, next){
//    let createdUser = await userModel.create({
//           username: "Rohit",
//           name : "Harshvardhan",
//           email : "harsh@noreply.com",
//           password : "zxcv"
//      })
     
//      debuglog("user created");
//      res.send(createdUser);
// })

// app.listen(3000);



// ********2)Read********
// app.get("/read", async function(req, res, next){
//     let user = await userModel.findOne({name: "Harsh"});
//     res.send(user);
// })


// app.listen(3000, () => {
//     debuglog("Readed");
// });



//******3)update********/

//     app.get("/update", async function(req, res, next){
//       let user = await userModel.findOneAndUpdate({name: "Harshvardhan"}, {name: "Trump"}, {new: true});   
//     res.send(user);
//     })

//  app.listen(3000);

//*****4)delete******/

//  app.get("/delete", async function(req, res){
//           let user = await userModel.findOneAndDelete({name: "Anonymous"});
//           res.send(user);
//  })

//  app.listen(3000);
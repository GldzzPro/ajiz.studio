var express = require('express');
var router = express.Router();
var User = require("../models/user");
var Pole = require("../models/pole");

router.route('/')
.get((req, res)=>{
  User.find((err, foundUser)=>{
    (!err) ? res.send(`Success ${foundUser}.`):res.send(err); 
  });
})
.post((req, res)=>{
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    pole :{
      id : null,
      name : ""
    }
})
  Pole.findOne({name: req.body.pole}, (err, foundPole)=>{
    if(foundPole){
       const{_id,name} =foundPole ; 
       user.pole.id = _id ;
       user.pole.name = name ;
      }
    else{
      res.send("No pole matching that name was found.");
    } 
  });
  
user.save((err)=>{
  (!err) ? res.send(`Successfully added a new user at ${user}.`) : res.send(err);
});
});

module.exports = router;
// {_id ,name} = foundPole
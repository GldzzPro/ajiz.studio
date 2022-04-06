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
  Pole.findOne({name: req.body.pole}, (err, foundPole)=>{
    if(foundPole){
       const{_id,name} =foundPole ; 
       const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        pole :{
          id : _id,
          name : name
        }
    })
    user.save((err)=>{
      (!err) ? res.send(`Successfully added a new user at ${user}.`) : res.send(err);
    });
      }
    else{
      res.send("No pole matching that name was found.");
    } 
  });
});

module.exports = router;
// {_id ,name} = foundPole
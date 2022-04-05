var express = require('express');
var router = express.Router();
var Pole = require("../models/poles");
router.route('/')
.get((req, res)=>{
  Pole.find((err, foundPole)=>{
    (!err) ? res.send(`Success ${foundPole}.`):res.send(err); 
  });
})
.post((req, res)=>{
  const Pole = new Pole({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
  })
  Pole.save((err)=>{
    (!err) ? res.send(`Successfully added a new user at ${user.created_at}.`) : res.send(err);
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var Pole = require("../models/pole");
router.route('/')
.get((req, res)=>{
  Pole.find((err, foundPole)=>{
    (!err) ? res.send(`Success ${foundPole}.`):res.send(err); 
  });
})
.post((req, res)=>{
  const pole = new Pole({
      name: req.body.name,
  })
  pole.save((err)=>{
    (!err) ? res.send(`Successfully added a new pole at ${pole.createdAt}.`) : res.send(err);
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var User = require("../models/user");
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
  })
  user.save((err)=>{
    (!err) ? res.send(`Successfully added a new user at ${user.created_at}.`) : res.send(err);
  });
});

module.exports = router;

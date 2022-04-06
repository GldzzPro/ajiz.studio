var express = require('express');
var cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const poleRoute = require("./routes/poles");
var app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Connect to MongoDB
mongoose.connect("mongodb+srv://AjizStudioAdmin:KkSJ1xJPdW4fRoVC@cluster0.j9gfx.mongodb.net/ajizDatabase?retryWrites=true&w=majority", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.get("/", function (req, res) {
  res.send({ status: "aziz ya kalb" });
});
app.use("/user",userRoute);
app.use("/pole",poleRoute);
app.listen(3000,()=>{console.log("server listening to requests on port 3000")})

module.exports = app;

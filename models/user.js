const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const passportLocalMongoose = require("passport-local-mongoose");

const Session = new Schema({
  refreshToken: {
    type: String,
    default: "",
  },
});

const User = new Schema(
{
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  authStrategy: {
    type: String,
    default: "local",
  },
  pole: {
       id:{
             type: mongoose.Schema.Types.ObjectId,
             ref: "Pole"
       },
       name: String,
  },
// many to many relationship 
  projects: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "projects"
    },
  events: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "events"
    },
  trainings: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "trainings"
    },    
  refreshToken: {
    type: [Session],
  },
},
{
 timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
  }
}
);

//Remove refreshToken from the response
// User.set("toJSON", {
//   transform: function (doc, ret, options) {
//     delete ret.refreshToken;
//     return ret;
//   },
// });

// User.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", User);

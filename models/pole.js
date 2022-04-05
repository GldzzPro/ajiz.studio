const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Pole = new Schema({
  name: {
    type: String,
    default: "",
  },
  members: [{
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    username: String,
    role: String,
}],
},
{ timestamps: true });

module.exports = mongoose.model("Pole", Pole);

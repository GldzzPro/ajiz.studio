const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Training= new Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    description: String,
    members:  [{
      id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
      },
      username: String,
      role: String,
  }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Training", Training);

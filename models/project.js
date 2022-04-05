const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema(
  {
    name: {
         type: String, 
         required: true 
        },   
    description: String,
    key: { 
        type: String, 
        required: true, 
        unique: true 
    },
    
    members:  [{
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: String,
            role: String,
        }],
    managers: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
    }],
    tasks: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task"
        },
        name: String,
    }],

  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", Project);

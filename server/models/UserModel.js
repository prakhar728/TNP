const mongoose = require("mongoose"); 

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    max: 50,
  },
  smartId: {
    type: String,
    required: true,
    max: 50,
  },
  department: {
    type: String,
    required: true,
    max: 50,
  },
  contact: {
    type: String,
    required: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  userType:{
    type:String,
    required:true
  },
  photo:{
    type:String,
    default:""
  }
});

module.exports = mongoose.model("Users", UserSchema);
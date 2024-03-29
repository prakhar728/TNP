const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const User = require('../models/UserModel');
const UserModel = require("../models/UserModel");

module.exports.signup = async (req, res, next) => {
  try {
    const { name, email,smartId,department,contact,userType } = req.body;
    const password = smartId;
    const usernameCheck = await User.findOne({ smartId });
    console.log(name, email,smartId,department,contact,userType );
    if (usernameCheck)
      return res.status(200).json({ msg: "SmartId already used", status: false });

    const securePassword = await bcrypt.hash(password, 10); // 10 is the salt

    const user = await User.create({
      name,
      email,
      smartId,
      department,
      contact,
      password: securePassword,
      userType
    });
    
    const data = {
      user: {
        id: user.id,
        smartId: user.smartId,
        email: user.email,
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET);

    return res.json({ status: true, authToken });

  } catch (ex) {
    next(ex);
  }
};


module.exports.login = async (req, res, next) => {
  console.log("Starting password");
    try {
        const { smartId, password } = req.body;
        console.log(smartId,password);
        let user = await User.findOne({ smartId });
        if (!user) {
          return res.json({ status:false, msg: "Please login with correct details smartid" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
          return res.json({ status:false, msg: "Please login with correct details password wrong" });
        }
        const data = {
            user: {
              id: user.id,
              smartId: user.smartId,
              email: user.email,
            },
          };
        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        res.json({ status:true, authToken });
      } catch (error) {
        console.log(error);
        res.json({status:false, msg:"Internal server error occoured"});
      }
};


module.exports.temp = async (req, res, next) => { // just to demo a controller using fetchuser middleware
  try {
    const smartId = req.user.smartId;
    let {name,email,department,contact,userType} = await User.findOne({ smartId });
    
    res.status(200).json({_id,smartId,name,email,department,contact,userType}); 
    // return res.json({ status: true, authToken });
  } catch (ex) {
    // res.status(400).json({err:ex})
    next(ex);
  }
};

module.exports.updateUser = async(req,res)=>{
  try {
    const {contact,address,SmartId,Resume,CGPA} = req.body;
    const user = await UserModel.findById(req.user.id);
    user.contact = contact;
    return res.status(200).json("Updated");
  } catch (error) {
    console.log(error);
    res.status(400).json({error:error})
  }
}

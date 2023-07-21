const user = require("../model/userModel");
const bcrypt = require("bcrypt");

//Here Handling the signup

const signUp = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password, email, phone, streetname, district, state } =
      req.body;

    const image = req.file.path;
    const url = req.file.filename;

    const alreadyExist = await user.findOne({ email: email });
    if (alreadyExist) {
      return res.status(400).json({ error: "Email already in use" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new user({
      username,
      email,
      password: hashPassword,
      phone,
      image: url,
      address: [
        {
          streetname,
          district,
          state,
        },
      ],
    });
    await newUser.save();
    res.json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Here Handling the login

const login =async (req, res) => {
  try {
    const{email,password}=req.body
    const User=await user.findOne({email:email})
    if(!User){
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const match=await bcrypt.compare(password,User.password)
    if(!match){
            
      return res.status(400).json({ error: "Incorrect password" });
  }else{
    return res.json({username:User.username})
  }

  } catch (error) {
    res.status(400).json({ error: error.message });
    }
  }


  //Here Handling the Update profile

const updateUser =async (req, res) => {
  try {
        
    const jwtToken = req.cookies.jwt.token;
    const decode=jwt.verify(jwtToken,"secretCodeforUser")

     if(!decode.id){
         throw new Error("Invalid Token")
     }
     const userData = await user.findOne({_id:decode.id})
   

     if(!userData){
         throw new Error("User not found")
     }
     if(req.file&&req.file.path){
         userData.image=req.file.filename;
         const url =req.file.path;
         await userData.save()
         console.log("success")
         res.status(200).send({success:true,url,message:"success"})
     }else{
         throw new Error("No image is there")
     }
     
 } catch (error) {
     res.status(500).json({error:'Internal server error'});
 }
};

module.exports = {
  signUp,
  login,
  updateUser,
};

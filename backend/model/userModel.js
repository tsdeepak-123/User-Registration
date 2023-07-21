const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        // required:true
    },
    password:{
        type:String,
        // required:true
    },
    phone:{
      type:Number,
    //   required:true
    },
    email:{
        type:String,
        // required:true
    },
    image:{
        type:String,
        // required:true
    },
    address:[{
        streetname:{
            type:String
        },
        district:{
            type:String
        },
        state:{
            type:String
        },

    }]
})



const userModel=new mongoose.model("userData",userSchema)

module.exports=userModel
const mongoose = require("mongoose");

const userSchema =  mongoose.Schema({
     userName : {
        type : String,
     },
     email : {
        type : String,
     },
     password: {
        type : String,
     },
     mobileNumber : {
        type : String,
     },
     gender:{
        type : String,
     },
     state : {
        type : String,
     },
     city : {
        type :String, 
     },
     profileImage : {
        type : String,
        default : "FRONTEND/src/images/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg"
     },
     posts:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "posts"
        }
    ]
});

const userModel  = mongoose.model("user" , userSchema);
module.exports = userModel;

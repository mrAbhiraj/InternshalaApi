
// const {default: mongoose} = require("mongoose") ;
const mongoose = require("mongoose") ;
const bcrypt = require("bcrypt") ;
const ErrorHandler = require("../utils/ErrorHandler");
const studentModel = new mongoose.Schema({

    email : {
        type: String,
        unique: true ,
        required: [true , "email is required"] ,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        select: false ,
        maxLength: [15, "password should not exceed more than 5 character"],
        maxLength: [6, "password should have  atleast 6 character"],
        // match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/]

    },
}, {timestamps: true })




studentModel.pre("save", function(){

    if(!this.isModified("password")){
        return ;
    }

    
   let salt =  bcrypt.genSaltSync(10) ;
   this.password = bcrypt.hashSync(this.password, salt)
}) ;



studentModel.methods.comparepassword = function(password){
  return bcrypt.compareSync(password,this.password) ;
}


const  Student = mongoose.model("student" , studentModel) ;

module.exports = Student ;
const { catchAsyncErrors } = require("../utils/catchAsyncErrors");


const Student = require("../models/studentModel");
const ErrorHandler = require("../utils/ErrorHandler");


exports.homepage = catchAsyncErrors (async (req, res , next)=>{
   
        res.json({msg : "Homepage"}) ;
   
})

exports.studentsignup = catchAsyncErrors (async (req, res , next)=>{
       const student  = await new Student(req.body).save()
        res.status(201).json(student) ;
   
})

exports.studentsignin = catchAsyncErrors (async (req, res , next)=>{
      const student = await  Student.findOne({email:req.body.email})
      .select("+password")
      .exec() 

    if(!student) return next(new ErrorHandler("User not found with this email address" , 404)) ;

    
    const isMatch = student.comparepassword(req.body.password)
    if(!isMatch) return next(new ErrorHandler("Wrong Credentils" , 500))

      res.json(student)
 })

 exports.studentsignout = catchAsyncErrors (async (req, res , next)=>{
       
    
 })
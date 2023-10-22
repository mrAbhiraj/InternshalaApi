const { catchAsyncErrors } = require("../utils/catchAsyncErrors");

exports.homepage = catchAsyncErrors (async (req, res , next)=>{
   
        res.json({msg : "Homepage"}) ;
   
})
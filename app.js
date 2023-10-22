require("dotenv").config({path: "./.env"}) ;
const express = require("express") ;
const app = express() ;


//logger
const logger = require("morgan") ;

app.use(logger("tiny")) ;


//routes

app.use("/" , require("./routes/indexRoutes"))

//error handling

const ErrorHandler = require("./utils/ErrorHandler");
const { generatedErrors } = require("./middlewares/errors");
app.all("*", (req, res, next)=>{
    next(new ErrorHandler(`Requested URL Not Found ${req.url}`, 404))
})


app.use(generatedErrors) ;

app.listen(process.env.PORT , 
    console.log(`server is running ${process.env.PORT}`)
)
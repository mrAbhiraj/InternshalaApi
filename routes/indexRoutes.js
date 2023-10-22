const express = require("express")
const router = express.Router() ;
const {homepage , studentsignup, studentsignin, studentsignout } = require("../controllers/indexController")

// GET  /
router.get("/" , homepage)

//POST /student/signup
router.post("/student/signup" , studentsignup) ;

//POST /student/signin
router.post("/student/signin" , studentsignin) ;


//Get /student/signout
router.post("/student/signout" , studentsignout) ;




module.exports = router 

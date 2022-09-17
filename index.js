const express = require("express")     // import express
const mongoose = require("mongoose")   // import mongoose
const app = express()                  // import middleware
const authRoutes =require('./Routes/authRoute')    //importing routes
const dotenv = require("dotenv")      //import env
dotenv.config()
// connecting database 
mongoose.connect(process.env.DB_CONNECT , { useNewUrlParser: true }, function() {        //connected to DB  and new database "student" also created 
    console.log ("connected to database")
}  )

app.use(express.json());

// invoking middleware
app.use('/api/v1' , authRoutes)

const port = 9000
//method
app.listen(process.env.PORT || port, function(){
    console.log("Server has started")

})

/*const server = function () {

} */
//server()


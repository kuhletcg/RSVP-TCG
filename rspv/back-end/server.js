// const { Router } = require("express")
const express = require("express")
require("dotenv").config()
const {route } = require("./Route/user")
const app = express()

const mongoose = require("mongoose")

app.use(express.json())

mongoose.connect(
   process.env.CONNECTION_STRING,
    {
    // userNewUrParse: true,
    useUnifiedTopology:true,
    useNewUrlParser : true 
},
() =>{
    console.log("MongoDB database connected!")
}
    );

    route (app)
    // const userRouter
const port=4100
app.listen(port,()=> console.log(`serve running on port ${port}`))
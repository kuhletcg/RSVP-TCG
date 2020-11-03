const express = require("express")

const app = express()

const mongoose = require("mongoose")

app.use(express.json())

mongoose.connect(
   "mongodb+srv://Kuhle:<password>@cluster0.sj0dv.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
    userNewUrParse: true,
    useUnifiedTopology:true,
    useNewUrlParser: true 
},
() =>{
    console.log("MongoDB database connected!")
}
    );
const port=4100
app.listen(port,()=> console.log(`serve running on port ${port}`))
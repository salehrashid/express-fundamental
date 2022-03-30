require("dotenv").config()
const express = require("express")
const app = express()
const router = express.Router()

//import router index
const indexRoute = require("./router/index")
const userRoute = require("./router/user")

//route
app.use("/", indexRoute, userRoute)


app.listen(process.env.PORT, function(){
    console.log(`server listen on port ${process.env.PORT}`)
})

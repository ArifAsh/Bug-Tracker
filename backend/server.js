require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookiePar = require('cookie-parser')
const mongoose = require("mongoose")
const routeUrls = require('./Controller/Routes/routes')
const app = express();



mongoose.connect(process.env.DB_URL,()=>console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/app',routeUrls)
app.listen(4000,()=>{
    console.log('Server up and running ')
})
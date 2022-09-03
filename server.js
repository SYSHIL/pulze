const mongoose = require('mongoose')
const app = require('./app')
const dotEnv = require('dotenv')
dotEnv.config({path: './config.env'})

const DB = process.env.DATABASE

mongoose.connect(DB, {
}).then(()=>console.log('DATABASE CONNECTED'));

port = process.env.PORT || 2000

app.listen(port, ()=>{
    console.log(`Server Started at port: ${port}`)
})
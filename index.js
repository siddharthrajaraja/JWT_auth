const express =require('express')
const app=express()
const dotenv=require('dotenv').config()
const cookieSession=require('cookie-session')
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false})) // parsing application/xxx-form-urlencoded
app.use(bodyParser.json()) // parsing application/json
//app.set('trust proxy',1) // trust first proxy https: traffic proxied throutgh other server (Nginx)

app.use(
    cookieSession(
        {
            signed:false,
            secure :false
        }
    )
)

require('./routes')(app)

app.listen(process.env.PORT || 8020 ,()=>{
    console.log(`AUTH-SERVER RUNNING ${process.env.PORT}`)
})
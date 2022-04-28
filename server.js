const express=require('express')
const path = require('path')
const app = express()
// const Date=require('./middleware/date')


app.use((req, res, next)=>{
    const day =new Date().getDay()
    const hours = new Date().getHours()
    if ((day===1) || (day===0)||(hours < 9)||(hours >17)){
        res.sendFile(__dirname+"/views/closed.html")
    }
    else{
        next()
    }
} )

app.use(express.static('views'))

//creation de serveur
 app.listen(5000,()=>{
     console.log('server is running')
 }) 
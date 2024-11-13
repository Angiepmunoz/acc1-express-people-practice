const express = require('express')
const app = express()
const peopleController = require('./controllers/people')

app.get('/',(req,res)=>{
  res.send("acc1-express-people app is now up and running...")
})
app.use('/people', peopleController)
module.exports = app;
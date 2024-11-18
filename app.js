const express = require('express')
const app = express()

const peopleController = require('./controllers/people')
app.use(express.json())

app.get('/',(req,res)=>{
  res.send("acc1-express-people app is now up and running...")
})
app.use('/people', peopleController)

app.get('*',(req,res)=>{
  res.status(404).send("The resource you're looking for could not be found")
})
module.exports = app;
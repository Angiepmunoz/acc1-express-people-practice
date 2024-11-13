const express = require('express')
const people = express.Router()

const peopleArr = require('../data/people')

people.get('/',(req, res)=>{
  res.status(200).json(peopleArr)
})
module.exports = people;
const express = require('express')
const people = express.Router()

const peopleArr = require('../data/people')

// index: get all users ---
people.get('/',(req, res)=>{
  res.status(200).json(peopleArr)
})

// show: get one user ----
people.get('/:id',(req, res)=>{
  try {
    const {id} = req.params;
    const person = peopleArr.find(person => person.id === Number(id))

    if(person){
      res.status(200).json(person)
    } else {
      throw `person not found for id: ${id}`
    }
  } catch (error) {
    res.status(404).json({error})
  }
})

// create: create a new user
people.post('/',(req, res)=>{
  try {
    const person = req.body
    if(person.name && person.age 
      && person.gender && person.city
      && person.isActive ) {
      person.id = peopleArr.length + 1
      peopleArr.push(person)
      res.status(200).json(peopleArr[peopleArr.length - 1])
    } else {
      throw `could not create new person. Please provide data for this person.`
    }
  } catch (error) {
    res.status(400).json({error: error})
  }
})
// delete: delete a user
people.delete('/:id',(req, res)=>{
  try {
    const { id } = req.params;
    console.log('id',id)
    const index = peopleArr.findIndex((person) => {
      return person.id === Number(id)
    })
    console.log('index',index)
    if(index !== -1){
      const foundPerson = peopleArr[index]
      console.log('found person',foundPerson)
      peopleArr.splice(index, 1)
      res.status(200).json(peopleArr)
    } else {
      throw `could not find person`
    }
    
  } catch (error) {
    res.status(404).json({error: error})
  }
})

// update one person
people.put('/:id',(req,res)=>{
  try {
    const {id} = req.params;
    const person = req.body;
    const index = peopleArr.findIndex((person) => Number(id) === person.id)
    console.log('foundIndex', index)
    if(index !== -1){
      peopleArr.splice(index, 1, person)
      res.status(200).json(peopleArr)
    } else {
      throw "The person you're attempting to update does not exist: please correct the ID and try again!"
    }
  } catch (error) {
      res.status(404).send({'error': error})
  }

})
module.exports = people;
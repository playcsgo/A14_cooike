require('dotenv').config()
const userList = require('../../user-list.json')
const userModel = require('../userModel')
const db = require('../../config/mongoose')

db.once('open', () => {
  userList.users.forEach(user => {
    userModel.create(user)
  })
  console.log('done')
})
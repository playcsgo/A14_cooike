const express = require('express')
const router = express.Router()
const userModel = require('../../models/userModel')
let failure = false

router.post('/', (req, res) => {
  const inputUserName = req.body.userName
  const inputPassword = req.body.passWord

  userModel.findOne({ firstName: inputUserName })
    .lean()
    .then(user => {
      if (!user) {
        failure = true
        res.render('index', {failure})
      } else if (user.password !== inputPassword) {
        failure = true
        res.render('index', {failure})
      } else if (user.password === inputPassword) {
        res.send(`Welcome back, ${user.firstName}`)
      }
    })
})

module.exports = router
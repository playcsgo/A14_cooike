const express = require('express')
const router = express.Router()
let failure = false

router.get('/', (req, res) => {
  if (req.cookies.userID) {
    res.send(`Welcome back, ${req.cookies.userID}`)
  } else {
    res.render('index', { failure })
  }
})


module.exports = router
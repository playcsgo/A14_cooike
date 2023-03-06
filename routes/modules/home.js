const express = require('express')
const router = express.Router()
let failure = false

router.get('/', (req, res) => {
  res.render('index', { failure })
})


module.exports = router
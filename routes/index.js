const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const check = require('./modules/check')

router.use('/', home)
router.use('/check', check)

module.exports = router
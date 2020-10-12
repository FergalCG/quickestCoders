const router = require('express').Router()

router.use('/user', require('./user'))

router.use('/code', require('./code'))


module.exports = router


const router = require('express').Router()
const Code = require('../models/code')

router.route('/').get(async (req, res, next) => {
    const data = await Code.find()
    console.log(data)
    res.send(data)
})

module.exports = router
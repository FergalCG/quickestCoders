const router = require('express').Router()
const Code = require('../models/code')

router.route('/').get((req, res, next) => {
    Code.find()
})
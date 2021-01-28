const router = require('express').Router()
const { ObjectId } = require('mongodb')
const Code = require('../../models/code')

// router.route('/').get(async (req, res, next) => {
//     try {
//         const data = await Code.find({_id: ObjectId("5f866fdf6e1e9cd5da97bde1")})
//         console.log(data)
//         res.send(data)
//     } catch (error) {
//         console.error(error)
//         next(error)
//     }
    
// })

router.route('/').post(async (req, res, next) => {
    try {
        const newCode = new Code({code: "while(true) { return true }"})
        await newCode.save()
        res.json('Code added successfully')
    } catch (error) {
        console.error(error)
        next(error)
    }
    
})

module.exports = router
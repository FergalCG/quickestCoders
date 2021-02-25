const router = require('express').Router()
const { ObjectId } = require('mongodb')
const Lesson = require('../../models/lesson')


router.get('/', async (req, res, next) => {
    console.log('MADE IT TO GET ROUTE!!!!!!!!!')
    try {
        // const data = await Lesson.find({_id: ObjectId('60304741294e9c3bbd8f25e4')})
        // console.log('in get try', data[0].lesson)
        // res.status(200).json(data[0].lesson)
        const data = await Lesson.find()
        console.log('in get try', data)
        res.status(200).json(data)
    } catch (error) {
        console.error(error)
        next(error)
    }
    
})

router.post('/', async (req, res, next) => {
    console.log('MADE IT TO POST ROUTE!!!!!!!!!')
    try {
        const lesson = new Lesson({lesson: ["w", "h", "i", "l", "e", "(", "t", "r", "u", "e", ")", " ", "{", "Enter", "Tab", "r", "e", "t", "u", "r", "n", " ", "t", "r", "u", "e", "Enter", "}"]})
        const newLesson = await lesson.save()
        res.status(201).json(newLesson)
    } catch (error) {
        console.error(error)
        next(error)
    }
    
})

module.exports = router
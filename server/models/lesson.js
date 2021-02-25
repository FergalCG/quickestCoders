const mongoose = require('mongoose')

const Schema = mongoose.Schema

const lessonSchema = new Schema({
    lesson: [{
        type: String
    }]
}, 
{
    timestamps: false
},
{
    collection: 'Lessons'
})

const Lesson = mongoose.model('Lesson', lessonSchema)

module.exports = Lesson
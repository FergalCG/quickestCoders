const mongoose = require('mongoose')

const Schema = mongoose.Schema

const codeSchema = new Schema({
    code: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true
})

const Code = mongoose.model('Code', codeSchema)

module.exports = Code
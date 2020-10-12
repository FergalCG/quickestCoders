const mongoose = require('mongoose')

const Schema = mongoose.Schema

const codeSchema = new Schema({
    codeSnippet: {
        type: string,
        required: true
    }
}, 
{
    timestamps: true
})

const Code = mongoose.model('Code', codeSchema)

module.exports = Code
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const codeSchema = new Schema({
    code: {
        type: String,
        required: true
    }
}, 
{
    timestamps: false
},
{
    collection: 'code'
})

const Code = mongoose.model('Code', codeSchema)

module.exports = Code
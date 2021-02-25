const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())


const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

const db = mongoose.connection
db.once('open', () => {
    console.log('MongoDB database connection established successfully')
})


app.use('/', require('./routes'))


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

module.exports = db
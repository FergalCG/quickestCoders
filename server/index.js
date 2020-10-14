const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080


app.use(cors())
app.use(express.json())


const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true})

const connnection = mongoose.connnection
connnection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})


app.use('/', require('./routes'))


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
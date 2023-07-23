const express = require('express')
const cors = require('cors')
const app = express()
const { isConnected } = require('./config/connect')
const dictionary = require('./routes/dictionary')
const client = require('./routes/client')
const bodyParser = require('body-parser')

isConnected()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use('/', dictionary)
app.use('/', client)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log('server is running!');
})
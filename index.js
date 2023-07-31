//using peckages
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session') 
const MemoryStore = require('memorystore')(session)
const useragent = require('express-useragent')

//using functions and routes
const dictionary = require('./routes/dictionary')
const client = require('./routes/client')
const admin = require('./routes/admin')
const { isConnected } = require('./config/connect')

require('./config/passport')
require('dotenv').config()


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
  cookie: { maxAge: 86400000 },
  store: new MemoryStore({
    checkPeriod: 86400000 // prune expired entries every 24h
  }),
}))
app.use(passport.initialize())
app.use(passport.session())

isConnected()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use('/', dictionary)
app.use('/', client)
app.use('/', admin)

app.use(useragent.express)
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log('server is running!');
})
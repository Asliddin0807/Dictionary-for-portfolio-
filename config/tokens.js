const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN, { expiresIn: '3h' })
}


const refreshToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN, { expiresIn: '2h' })
}

module.exports = { generateToken, refreshToken }
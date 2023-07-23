const jwt = require('jsonwebtoken')
require('dotenv').config()
const Client = require('../models/auth')


const authMiddleWare = async(req, res, next) => {
    let token = req.headers.authorization.split(' ')[1]
    if(token){
        const decoded = jwt.verify(token, process.env.TOKEN)
        const users = await Client.findById({ _id: decoded?.id })   
        req.user = users
        next()
    }else{
        res.status(404).json({ message: 'User nout found!' })
    }
}

module.exports = { authMiddleWare }
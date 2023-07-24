const jwt = require('jsonwebtoken')
const Client = require('../models/auth')
require('dotenv').config()


const isAdmin = async(req, res, next) => {
    let token = req.headers.authorization.split(' ')[1]
    if(token){
        let decode = jwt.verify(token, process.env.TOKEN)
        const admin = await Client.findById({ _id: decode?.id })
        if(admin.role === 'admin'){
            req.admin = admin
            next()
        }else{
            res.status(404).json({ message: 'this is not Admin!' })
        }
    }else{
        res.status(404).json({ message: 'this is not token!' })
    }
}

module.exports = { isAdmin }
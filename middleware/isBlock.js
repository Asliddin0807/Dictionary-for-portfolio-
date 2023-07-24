const jwt = require('jsonwebtoken')
const Client = require('../models/auth')
require('dotenv').config()


const isBlocked = async(req, res, next) => {
    let token = req.headers.authorization.splist(" ")[1]
    if(token){
        let decode = jwt.verify(token, process.env.TOKEN)
        const find = await Client.findById({ _id: decode?.id })
        if(find.isBlock === false){
            next()
        }else{
            res.status(401).json({ message: 'Вы заблокированы!' })
        }
    }
}

module.exports = { isBlocked }
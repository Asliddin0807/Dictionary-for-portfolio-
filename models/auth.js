const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },

    password: {
        type: String
    },

    favourite: {
        type: Array
    },

    userStatus: {
        type: Date
    }  
    
})


module.exports = mongoose.model('Client', authSchema)

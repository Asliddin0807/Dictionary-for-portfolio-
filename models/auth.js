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

    userStatus: [{
        watch: {
            type: String
        },

        date: {
            type: String
        }
    }],

    tarif: [{
        free: {
            type: Boolean,
            default: true
        },

        paid: {
            type: Boolean,
            default: false
        }
    }],

    role: {
        type: String,
        default: 'user'
    },

    isBlock: {
        type: Boolean,
        default: false
    },

    googleId: {
        type: String,
    }
    
})


module.exports = mongoose.model('Client', authSchema)

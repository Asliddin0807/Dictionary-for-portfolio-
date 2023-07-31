const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    first_name: {
        type: String,
    },

    last_name: {
        type: String
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
    
    },
    
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,

    image: {
        type: Array,
    },

    deviceId: {
        type: String
    },

    device_name: {
        type: String
    }
})

authSchema.methods.createPasswordResetToken = async function(){
    const resetToken = crypto.randomBytes(32).toString("hex")
    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex")
    this.passwordResetExpires = Date.now() + 30 * 60 * 1000 //10 minut
    return resetToken
} 
module.exports = mongoose.model('Client', authSchema)

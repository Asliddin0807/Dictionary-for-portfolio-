const mongoose = require('mongoose')

const dicSchema = new mongoose.Schema({
    id: String,
    dictionaryData: [{
        text: String,
        translate: String,
    }],
    count: Number
})



module.exports = mongoose.model('Dictionary', dicSchema)
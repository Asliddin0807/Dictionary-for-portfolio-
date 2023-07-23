const mongoose = require('mongoose')

const dicSchema = new mongoose.Schema({
    id: String,
    dictionaryData: [{
        text: String,
        translate: String,
    }]
})



module.exports = mongoose.model('Dictionary', dicSchema)
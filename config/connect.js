const mongoose = require('mongoose')

const isConnected = () => {
    let connect = mongoose.connect('mongodb://127.0.0.1:27017/dictionary')
    .then(() => {
        console.log('Mongodb connected!')
    }).catch((err) => {
        console.log(err)
    });
    
}

module.exports = { isConnected }
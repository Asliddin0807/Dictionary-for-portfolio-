const mongoose = require('mongoose')

const isConnected = () => {
    
    let connect = mongoose.connect('mongodb+srv://Asliddin:asliddin123@cluster0.nmfwoac.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Mongodb connected!')
    }).catch((err) => {
        console.log(err)
    });
    
}

module.exports = { isConnected }
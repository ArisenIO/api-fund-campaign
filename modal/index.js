const mongoose = require('mongoose');
const Payment = require('./Schema/Payment.js');

const config = require('../config/index.js');
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(config.DB_URI, options)
        .then(res => console.log('DATABASE CONNECTED'))
        .catch(e => console.error(e))
        
module.exports = {
    Payment
}
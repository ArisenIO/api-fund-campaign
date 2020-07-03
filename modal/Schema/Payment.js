const mongoose = require('mongoose');

const User = mongoose.Schema;
const Pay = new User({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Payment = mongoose.model('peeps-revolutions', Pay)
module.exports = Payment;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    phone_number: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    access_token: {
        type: String,
        required: true,
        default: null
    }
});

module.exports = mongoose.model('login', user);
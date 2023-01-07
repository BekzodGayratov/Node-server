const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    first_name: {
        type: String,
        default: null,
    },
    last_name: {
        type: String,
        default: null,
    },
    phone_number: {
        type: String,
        default: null,
        required: true,
    },
    password: {
        type: String,
        default: null,
        required: true,
    },
    access_token:{
        type: String,
        required: true,
        default: null
    }

});

module.exports = mongoose.model('register', user);
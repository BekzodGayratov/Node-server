const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const news = new Schema({
    title: {
        type: String,
        required: true,
        default: null,
    },
    subtitle: {
        type: String,
        required: true,
        default: null

    },
    img: {
        type: String,
        required: true,
        default: null,
    },
    details: {
        views: {
            type: Number,
            required: true,
            default: 0
        },
        likes: {
            type: Number,
            required: true,
            default: 0
        }
    },
    is_liked: {
        type: Boolean,
        required: false,
        default: false,
    },
    created_at: {
        type: String,
        default: null,
        required: true,
    },

});

module.exports = mongoose.model('news', news);
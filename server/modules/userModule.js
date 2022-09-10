const mongoose = require('mongoose')

const userModule = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
},
{
    collection: "user",
});

module.exports = mongoose.model('user', userModule);
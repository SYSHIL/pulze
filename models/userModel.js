const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User need to have a name'],
    },
    email: {
        type: String,
        required: [true, 'User need to have an email'],
        unique: true
    },
    phone: {
        type: Number,
        required:[true, 'Phone number is required'],
    },
    password: {
        type: String,
        required: [true, 'User password is required']
    }
})

const user = mongoose.model('users', userSchema);

module.exports = user;

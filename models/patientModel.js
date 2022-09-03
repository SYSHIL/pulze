const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        unique:true
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone is required"]
    },
    age: {
        type: Number,
        required: [true, 'Age is required']
    },
    sex: {
        type: String,
        required: [true, 'Gender is required']
    },
    temp: {
        type: Number,
        default: 96,
    },
    pulseRate: {
        type: Number,
        default: 72
    },

    deathStatus: {
        type: Number,
        default: 0
    },

    assignedTo: {
        type: String,
        required: [true, 'Doctor name is required'],
    },

    ca: Number,
    cp: String,
    restecg: String,
    exng: String,
    slp: String,
    caa: String,
    thall: String,
    trtbps: Number,
    thalachh: Number,
    oldpeak: Number,

});

const Patient = mongoose.model('patientdata', patientSchema);

module.exports = Patient
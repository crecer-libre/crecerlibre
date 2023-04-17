const {Schema, model} = require('mongoose');

const HourSchema = new Schema({
    date: {
        type: Date,
        required: [true, 'The Date is requiresd.']
    },
    proffesionalId: {
        type: String,
        required: [true, 'The Id Proffesional is required.']
    },
    studentId: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: [true, 'The Status Hour is required.']
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Hours', HourSchema);
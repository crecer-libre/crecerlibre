const {Schema, model} = require('mongoose');

const HourSchema = new Schema({
    date: {
        type: Date,
        required: [true, 'The Date is requiresd.']
    },
    proffesionalId: {
        type: Number,
        required: [true, 'The Id Proffesional is required.']
    },
    studentId: {
        type: Number,
        required: false
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Hours', HourSchema);
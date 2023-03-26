const {Schema, model} = require('mongoose');

const HourSchema = new Schema({
    date: {
        type: Date,
        required: [true, 'The Date is requiresd.']
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Hours', HourSchema);
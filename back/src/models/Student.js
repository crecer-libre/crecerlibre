const {Schema, model} = require('mongoose');

const StudentSchema = new Schema({
    rut: {
        type: String,
        required: [true, 'The Rut is required for register to Student']
    },
    name: {
        type: String,
        required: [true, 'The name is required for register to Student']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'The phone is required for register to Student']
    },
    phone: {
        type: String,
        unique: true,
        required: [true, 'The phone is required for register to Student']
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Students', StudentSchema);
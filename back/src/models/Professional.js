const {Schema, model} = require('mongoose');

const ProfessionalSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name is required for register to Professional.']
    },
    username: {
        type: String,
        required: [true, 'The username is required for register to Professional']
    },
    password: {
        type: String,
        required: [true, 'The password is required for register to Professional']
    },
    position: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: [true, 'The gender is required for register to Professional']
    },
    role: {
        type: String,
        enum: ['ADMIN_ROLE', 'PROFESSIONAL_ROLE']
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Professionals', ProfessionalSchema);
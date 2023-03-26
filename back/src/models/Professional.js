const {Schema, model} = require('mongoose');

const ProfessionalSchema = new Schema({
    
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Professionals', ProfessionalSchema);
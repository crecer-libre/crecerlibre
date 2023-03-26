const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb://mongo-db/crecerlibre', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Connected to Mongo');
    } catch (error) {
        console.error(error);
        throw new Error('Error connecting to Mongo');
    }
}

module.exports = {
    dbConnection
}
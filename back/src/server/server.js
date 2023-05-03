const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../config/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //paths
        this.authPath = '/api/auth';
        this.professionalPath = '/api/professionals';
        this.hourPath = '/api/hours';
        this.studentPath = '/api/students';

        //db
        this.connection();

        //methods
        this.middlewares();
        this.routes();
    }

    async connection(){
        await dbConnection();
    }

    middlewares(){
        this.app.use( express.json() );
        this.app.use( cors() );
    }

    routes(){
        this.app.use( this.authPath, require('../routes/auth') );
        this.app.use( this.professionalPath, require('../routes/professional') );
        this.app.use( this.hourPath, require('../routes/hour') );
        this.app.use( this.studentPath, require('../routes/student') );
    }

    listen(){
        this.app.listen( this.port );       
    }

}

module.exports = Server;
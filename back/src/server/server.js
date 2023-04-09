const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../config/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //paths
        this.authPath = '/api/auth';
        this.professionalPath = '/api/professional';

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
    }

    listen(){
        this.app.listen( this.port );       
    }

}

module.exports = Server;

const express = require('express');
const cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.middlewares();
        //middlewares: funciones que añaden mas funciones al webserver, se ejecutan continuamente

        //rutas de mi aplicaciones
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        //lectura y parseo del body, permite recibir un tipo de informacion, en este caso JSON
        this.app.use(express.json() );
        //directorio public
        //use() indica que es un middleware
        this.app.use( express.static('public') );// aqui indica la carpeta que se mostrara que se llama public, esto se sobrepone a la ruta puesta 
        
    }

    routes() {
        
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
        
    }
    listen(){
        this.app.listen(this.port,() => {
            console.log('servidor corriendo en...', this.port);
        })
    }
}


module.exports = Server;
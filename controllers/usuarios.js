const {response , request } = require('express');

const usuariosGet =   (req = request, res = response) => {
    // req es = a request para recibir varios parametros
    // req.query recibira todos los parametros 
    //se puede usar desestructuracion para recibir las variables que uno quiera y asignar valores por defecto
    
    const {q, nombre = 'No name', apikey,page = 1,limit} = req.query;
    res.json({
        msg: "get API - CONTROLADOR",
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPost =   (req, res = response) => {
   
   const {nombre ,edad} = req.body; // la req es lo que el usuario envia y el body es el cuerpo de lo que esta enviando

    res.json({
        msg: "POST API - CONTROLADOR",
        nombre,
        edad // se imprime lo que el usuario envio en body
    })
}

const usuariosPut =   (req, res = response) => {

    const {id} = req.params;
    res.json({
        msg: "PUT API - CONTROLADOR",
        id
    })
}

const usuariosPatch =   (req, res = response) => {
    res.json({
        msg: "PATCH API - CONTROLADOR"
    })
}

const usuariosDelete =   (req, res = response) => {
    res.json({
        msg: "DELETE API - CONTROLADOR"
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}

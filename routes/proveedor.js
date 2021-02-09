const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Proveedor = require('../models/Proveedor');

app.post('/', (req, res) => {

    var body = req.body;
    Proveedor.create({

        nombre_proveedor: body.nombre_proveedor        
        
    }).then(resultado => {
        res.status(200).json({
            ok: true,
            proveedor : resultado
        })

    }).catch(err => {
         res.status(500).json({
            ok: false,
            mensaje: 'Error al insertar el proveedor',
            err
        });
    })
});


app.get('/', (req, res) => {
    Proveedor.findAll().then(resultado => {

        res.status(200).json({
            ok: true,
            proveedor: resultado
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener el proveedor',
            err
        });
    });
});

module.exports = app;
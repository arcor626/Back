const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Servicios = require('../models/servicios');
const Sequelize = require('sequelize');


app.post('/', (req, res) => {

    var body = req.body;
    Servicios.create({

        serv_nombre: body.serv_nombre        
        
    }).then(resultado => {
        res.status(200).json({
            ok: true,
            servicio: resultado
        })

    }).catch(err => {
         res.status(500).json({
            ok: false,
            mensaje: 'Error al insertar el servicio',
            err
        });
    })
});


app.get('/', (req, res) => {
    Servicios.findAll().then(resultado => {

        res.status(200).json({
            ok: true,
            servicios: resultado
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener los servicios',
            err
        });
    });
});

module.exports = app;
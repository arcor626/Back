const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Elementos = require('../models/Elemento');
const Sequelize = require('sequelize');


app.post('/', (req, res) => {

    var body = req.body;
    Elementos.create({

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
    Elementos.findAll().then(resultado => {

        res.status(200).json({
            ok: true,
            elementos: resultado
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener los elementos',
            err
        });
    });
});

module.exports = app;